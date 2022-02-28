import axios, { AxiosResponse } from 'axios';
import store from '../../stores';
import { storeTokenResponse, storage } from '../../_helpers';
import { WA_SIGN_IN_STATE, WA_SIGN_IN_STATE_DELIMITER, WA_SIGN_OUT_STATE, WA_SIGN_OUT_REASON } from '../../models/GlobalConstants';
import { generateGUID } from '../../utils/utils';
const moment = require('moment');

export function isTokenExpired(): boolean {
  let exp = storage.getItem('exp');
  if (exp) {
    return Date.now().valueOf() > moment.unix(exp).valueOf();
  } else {
    return true;
  }
}

export function isTokenPresent(): boolean {
  return !!(storage.getItem('access_token')) && !!(storage.getItem('refresh_token'));

}

export function login(extraState: string = '', loginHint?: string) {
  const signinState = generateGUID() + '';
  const qParams = new window.URLSearchParams();
  qParams.append('scope', store.globalStore.EnvVaribles.waScope);
  qParams.append('redirect_uri', store.globalStore.EnvVaribles.waRedirectUri);
  qParams.append('client_id', store.globalStore.EnvVaribles.waClientId);
  qParams.append('response_type', 'code');
  qParams.append('state', extraState + WA_SIGN_IN_STATE_DELIMITER + signinState);
  if (loginHint) {
    qParams.append('login_hint', loginHint);
  }
  storage.setItem(WA_SIGN_IN_STATE, signinState);
  try {
    window.location.assign(`${store.globalStore.EnvVaribles.waAuthuri}?${qParams.toString()}`);
  } catch (e) {
    // console.error(e);
  }
}

export async function fetchToken() {
  const data = new window.URLSearchParams();
  data.append('redirect_uri', store.globalStore.EnvVaribles.waRedirectUri);
  data.append('client_secret', '');
  data.append('client_id', store.globalStore.EnvVaribles.waClientId);
  data.append('code', store.routerStore.route.params.code || '');
  data.append('grant_type', 'authorization_code');

  let tokenResponse = await axios.post(store.globalStore.EnvVaribles.waTokenUri, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response: AxiosResponse) => response.data);
  storeTokenResponse(tokenResponse);
  storage.setItem('Authenticated', 'true');
}

export async function refreshToken(refreshRetryCount: number = 1) {
  let instance = axios.create();
  let data = new window.URLSearchParams(); // since we are using only chrome; this is allowed
  data.append('grant_type', 'refresh_token');
  data.append('redirect_uri', store.globalStore.EnvVaribles.waRedirectUri);
  data.append('refresh_token', storage.getItem('refresh_token') || '');
  data.append('client_id', store.globalStore.EnvVaribles.waClientId);
  instance.interceptors.response.use(undefined, (error: any) => {
    error.config.retryCount = error.config.retryCount || 0;
    if (error.config.retryCount < refreshRetryCount) {
      error.config.retryCount += 1;
      return instance(error.config);
    } else {
      return Promise.reject(error);
    }
  });
  let tokenResponse = await instance.post(store.globalStore.EnvVaribles.waTokenUri, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response: AxiosResponse) => response.data);
  storeTokenResponse(tokenResponse);
  storage.setItem('Authenticated', 'true');
}

export async function signout(userOnBoarded: boolean, signoutReason?: any) {
  const signoutState = generateGUID() + '';
  let qParams = new window.URLSearchParams();
  qParams.append('id_token_hint', storage.getItem('id_token') || '');
  qParams.append('post_logout_redirect_uri', store.globalStore.postLogoutRedirectUrl || store.globalStore.EnvVaribles.waLogoutRedirectUri);
  qParams.append('state', window.btoa(JSON.stringify({ WA_SIGN_OUT_STATE: signoutState })));

  storage.clear();
  storage.setItem(WA_SIGN_OUT_STATE, signoutState);
  if (signoutReason) {
    storage.setItem(WA_SIGN_OUT_REASON, signoutReason);
  }
  /* istanbul ignore next*/
  if (userOnBoarded) {
    storage.setItem('OnBoarded', 'true');
  } else {
    storage.setItem('OnBoarded', 'false');
  }
  try {
    window.location.assign(`${store.globalStore.EnvVaribles.waLogoutUri}?${qParams.toString()}`);
  } catch (e) {
    // console.error(e);
  }
}