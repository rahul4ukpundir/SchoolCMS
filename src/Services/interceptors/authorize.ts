import { AxiosRequestConfig } from 'axios';
import { authHeader } from '../../_helpers';
import { IApiInterceptor, State } from './IInterceptors';

/**
 * injects the token in the request headers
 * 
 * @param config { AxiosRequestConfig }
 */
const accessTokenInjector: IApiInterceptor<AxiosRequestConfig> = {
  state: State.ON_FULFILLED,
  trigger: (config) => Promise.resolve(true), // trigger unconditionally if set
  handler: (config) => {
    let headers = config.headers ? config.headers : {};
    config.headers = {
      ...headers,
      ...authHeader()
    };
    return Promise.resolve(config);
  }
};

export default accessTokenInjector;
