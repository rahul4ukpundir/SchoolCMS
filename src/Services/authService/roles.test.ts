import axios from 'axios';
import { UserTypes } from '../../models/GlobalEnums';
import * as interceptors from '../interceptors';
import { getRoles, getUserAccesInfo } from './roles';

jest.mock('axios', () => {
  return {
    create: jest.fn()
  };
});
jest.mock('../../stores', () => {
  return {
    globalStore: {
      EnvVaribles: {
        waOnBoardingEndpoint: 'waOnBoardingEndpoint'
      },
      TenantId:"forge-wa-manage"
    },
    userStore: {
      setLoggedInUserPermissions: jest.fn(),
      setLoggedInUserDetails: jest.fn()
    }
  };
});

jest.mock('../interceptors', () => {
  let mockPost = jest.fn((arg) => Promise.resolve({ data: { result: { roleName: 'admin'} } } ));
  return {
    post: mockPost,
    attachInterceptors: jest.fn().mockImplementation(() => ({
      post: mockPost
    })),
    authorize: {},
    unauthorized: {}
  };
});

describe('admin', () => {
  it('should call GetRoleForUser', async () => {
    await expect(getRoles()).resolves.toEqual(undefined);
  });
});

describe('getUserAccessInfo', () => {
  it('test for admin, user and guestuser', async () => {
    const result1 = getUserAccesInfo('admin');
    expect(result1.userPermissions.isAdmin).toBeTruthy();
    const result2 = getUserAccesInfo('user');
    expect(result2.userPermissions.isAdmin).toBeFalsy();
    const result3 = getUserAccesInfo('guestuser');
    expect(result3.userDetails.userType).toBe(UserTypes.GUEST);
    expect(result3.userPermissions.canKickUser).toBeFalsy();
  });
});