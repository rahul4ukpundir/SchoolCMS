import axios from 'axios';
import { attachInterceptors, authorize, tenantInfo } from '../interceptors';
import store from '../../stores';
import { UserRoles, UserTypes } from '../../models/GlobalEnums';

export const getUserAccesInfo = (roleName: string) => {
    let userPermissions: any = { isAdmin: false, callPermissions: { canMuteUser: true, canKickUser: false, canInviteUser: false, canDownloadAttachment: false } };
    let userDetails;
    switch (roleName) {
        case "admin": {
            userPermissions = { ...userPermissions, isAdmin: true, callPermissions: { ...userPermissions.callPermissions, canKickUser: true, canInviteUser: true, canDownloadAttachment: true } };
            userDetails = { userRole: UserRoles.ADMIN, userType: UserTypes.TENANT };
            break;
        }
        case "guestuser": {
            userDetails = { userRole: UserRoles.GUEST_USER, userType: UserTypes.GUEST };
            break;
        }
        default: {
            userPermissions = { callPermissions: { canKickUser: true, canInviteUser: true, canDownloadAttachment: true } };
            userDetails = { userRole: UserRoles.USER, userType: UserTypes.TENANT };
            break;
        }
    }
    return { userPermissions, userDetails };
}

export async function getRoles() {
  const url = store.globalStore.EnvVaribles.waOnBoardingEndpoint + 'Access/GetRoleForUser';
  let userPermissions;
  let userDetails;
  try {
    let response = await attachInterceptors(axios.create(), [authorize, tenantInfo], []).post(
      url,
      {},
      {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
    let result = response.data.result;
    const accessDetails = getUserAccesInfo(result.roleName);
    userPermissions = accessDetails.userPermissions;
    userDetails = accessDetails.userDetails;
  } catch (e) {
    // if this roles api fails, throw the error instead of assuming a wrong role
    console.error(e);
    throw e;
  }
  store.userStore.setLoggedInUserPermissions(userPermissions);
  store.userStore.setLoggedInUserDetails(userDetails);
}
