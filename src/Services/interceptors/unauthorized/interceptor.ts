import { AxiosInstance } from 'axios';
import { attemptTokenRefresh } from './refreshToken';
import { Cache } from './types';
import { IApiInterceptor, State } from '../IInterceptors';

const requestRetryCount = 1;
const cache: Cache = {
  isRefreshingToken: false
};

// this is an axios intercepter which handles token expiry errors
export async function handleExpiredToken(error: any, instance: AxiosInstance) {
  try {
    // refresh token
    await attemptTokenRefresh(cache);
    // retry original request
    let config = error.config;
    config.retryCount += 1;
    return instance(config);
  } catch (e) {
    // refresh token failed
    throw error;
  }
}

export function shouldTriggerHandler(error: any): Promise<boolean> {
  error.config.retryCount = error.config.retryCount || 0;
  if (error.response
    && error.response.status === 401
    && error.config.retryCount < requestRetryCount
  ) {
    return Promise.resolve(true);
  } else {
    return Promise.reject(false);
  }
}

const refreshTokenInterceptor: IApiInterceptor<any> = {
  state: State.ON_REJECTED,
  trigger: shouldTriggerHandler,
  handler: handleExpiredToken
};

export default refreshTokenInterceptor;