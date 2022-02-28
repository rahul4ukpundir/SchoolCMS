import { Cache } from './types';
import { refreshToken } from '../../authService';
import stores from '../../../stores';
import { storage } from '../../../_helpers';

export async function attemptTokenRefresh(cache: Cache) {
  if (!cache.isRefreshingToken) {
    // console.info('no refresh cache');
    cache.isRefreshingToken = true;
    cache.refreshTokenPromise = doRefresh()
      .catch((err) => {
        // couldn't refresh token
        handleRefreshTokenFailure();
        throw err;
      }).finally(() => {
        cache.isRefreshingToken = false;
        cache.refreshTokenPromise = undefined;
      });
  } else {
    // console.info('refresh cache present; using that');
  }
  return cache.refreshTokenPromise;
}

function handleRefreshTokenFailure() {
  storage.clear();
  storage.setItem('OnBoarded', 'true');
  stores.globalStore.setSessionExpired(true);
}

async function doRefresh() {
  // console.info('refreshing token');
  let refreshRetryCount = 1;
  return refreshToken(refreshRetryCount);
}