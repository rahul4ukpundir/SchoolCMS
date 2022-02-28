import { apiService } from "../api.service";
import { notify } from "../../components/Notification/Notification";
import { storage } from "../../_helpers";
import * as tenantService from "./tenantInfo.api.service";
import stores from "./../../stores";
import interceptors from "../interceptors/tenantInfo";

jest.mock("../api.service", () => {
  return {
    apiService: {
      GETCALL: jest.fn()
    },
  };
});
jest.mock("../../components/Notification/Notification", () => {
  return {
    notify: jest.fn(),
  };
});

jest.mock("../interceptors/tenantInfo", () => {
  let mockGet = jest.fn((arg) => Promise.resolve(arg));
  return {
    get: mockGet,
    attachInterceptors: jest.fn().mockImplementation(() => ({
      get: mockGet,
    })),
    authorize: {},
    tenantInfo: {},
    unauthorized: {},
  };
});

jest.mock("./../../stores", () => {
  return {
    globalStore: {
      EnvVaribles: {
        waOnBoardingEndpoint: "waOnBoardingEndpoint",
      },
      TenantId: "forge-wa-manage-dev",
      postLogoutRedirectUrl: 'url',
      setTenantId: jest.fn(),
      setPostLogoutRedirectUrl: jest.fn()
    },
  };
});
const mockProjectDetails = { result: [{ projectId: "forge-wa-manage-dev", portalpostLogoutRedirectUri: 'url' }] };

describe("tenant service", () => {
  describe("getTenant call", () => {
    it("should make a get call with proper data", async () => {
      (apiService.GETCALL as any).mockImplementationOnce(() => {
        return Promise.resolve(mockProjectDetails);
      });
      await tenantService.getTenant();
      await expect(apiService.GETCALL).toHaveBeenCalled();
    });
    it("should make a get call and error out", async () => {
      (apiService.GETCALL as any).mockImplementationOnce(() => Promise.reject('err'));
      await expect(tenantService.getTenant()).rejects.toEqual('err');
    });
  });
});
