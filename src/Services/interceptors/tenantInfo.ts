import { AxiosRequestConfig } from "axios";
import { IApiInterceptor, State } from "./IInterceptors";
import stores from "../../stores";
import { replaceTenantInUrl } from "../../_helpers/commonHelper"
/**
 * injects the tenant in the url.
 *
 * @param config { AxiosRequestConfig }
 */
const tenantInfo: IApiInterceptor<AxiosRequestConfig> = {
  state: State.ON_FULFILLED,
  trigger: (config) => config.url!.indexOf("GetProjectForUser") < 0 ? Promise.resolve(true) : Promise.reject(false), // trigger when the all the apis except GetProjectForUser
  handler: (config) => {   
      if (config.url) {
        const url = replaceTenantInUrl(config.url, "{tenant}", stores.globalStore.TenantId);
        config.url = url;
      }
      return Promise.resolve(config);
  },
};
export default tenantInfo;
