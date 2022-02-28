import { apiService } from "../api.service";
import stores from "./../../stores";
import storage from "../../_helpers/storage";
import { replaceTenantInUrl } from "../../_helpers/commonHelper";
import { notify } from "../../components/Notification/Notification";
export interface IProjectDetail {
  projectId: string;
  portalpostLogoutRedirectUri: string;
}
export async function getTenant() {
  const url =
    stores.globalStore.EnvVaribles.waOnBoardingEndpoint +
    "Access/GetProjectForUser";
  await apiService
    .GETCALL(replaceTenantInUrl(url, "/{tenant}/", "/"), null, 30000)
    .then((results) => { 
      if (!results) {
        return null
      }
      return results.result[0];
    })
    .then((response: IProjectDetail) => {
      if (response) {
        stores.globalStore.setTenantId(response.projectId);
        stores.globalStore.setPostLogoutRedirectUrl(response.portalpostLogoutRedirectUri);
        storage.setItem("tenantId", stores.globalStore.TenantId);
        storage.setItem("postLogoutRedirectUrl", stores.globalStore.postLogoutRedirectUrl);
      }
    })
    .catch((err: any) => {
      notify({
        severity: "critical",
        content: "ERROR_TENANT_FAIL",
      });
      throw err;
    });
}
