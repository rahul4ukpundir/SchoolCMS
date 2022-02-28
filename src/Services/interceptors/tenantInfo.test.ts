import axios from "axios";
import tenantInfo from "./tenantInfo";
import store from "../../stores";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    create: jest.fn(),
  };
});
jest.mock("../../stores", () => {
  return {
    globalStore: {
      EnvVaribles: {
        waOnBoardingEndpoint: "waOnBoardingEndpoint",
      },
      TenantId: "forge-wa-manage-dev",
    },
  };
});

describe("tenantInfo", () => {
  it("triggers always if set", async () => {
    let config = {
      url:
        "https://customeronboarding-dev.apps-ext.dev.forgeapp.honeywell.com/{tenant}/v1/api/",
    };
    await expect(tenantInfo.trigger(config, axios)).resolves.toEqual(true);
  });

  it("should inject the tenantid in the url", async () => {
    let config = {
      url:
        "https://customeronboarding-dev.apps-ext.dev.forgeapp.honeywell.com/{tenant}/v1/api/",
    };
    let response = await tenantInfo.handler(config, axios);
    expect(response.url).toEqual(
      "https://customeronboarding-dev.apps-ext.dev.forgeapp.honeywell.com/forge-wa-manage-dev/v1/api/"
    );
  });
  it("should  not inject the tenantid in the url", async () => {
    let config = {
      url:
        "https://customeronboarding-dev.apps-ext.dev.forgeapp.honeywell.com/v1/api/Access/GetProjectForUser",
    };
    let response = await tenantInfo.handler(config, axios);
    expect(response.url).toEqual(
      "https://customeronboarding-dev.apps-ext.dev.forgeapp.honeywell.com/v1/api/Access/GetProjectForUser"
    );
  });
});
