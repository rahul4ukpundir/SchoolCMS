import { notify } from '../../../components/Notification/Notification';
import { login, refreshToken } from '../../authService';
import { attemptTokenRefresh } from './refreshToken';
import stores from '../../../stores';

jest.mock('../../../components/Notification/Notification', () => {
  return {
    notify: jest.fn()
  };
});
jest.mock('../../authService', () => {
  return {
    login: jest.fn(),
    refreshToken: jest.fn()
      .mockImplementationOnce(() => Promise.resolve())
      .mockImplementationOnce(() => Promise.resolve())
      .mockImplementationOnce(() => Promise.reject())
  };
});
jest.mock('../../../stores', () => {
  return {
    globalStore: {
      setSessionExpired: jest.fn()
    }
  }
})

describe('attempt token refresh', () => {
  it('should make the refresh token call if existing call is not found in the cache', async () => {
    let cache = { isRefreshingToken: false };
    let response = attemptTokenRefresh(cache);
    expect(cache).toHaveProperty('isRefreshingToken', true);
    await expect(response).resolves.toEqual(undefined);
  });

  it('should return the existing promise if it is found in the cache', async () => {
    let response = attemptTokenRefresh({ isRefreshingToken: true, refreshTokenPromise: Promise.resolve({ existingCall: true }) });
    await expect(response).resolves.toEqual({ existingCall: true });
  });

  it('should clear the cache when refreshing is done', async () => {
    let cache = { isRefreshingToken: false };
    await attemptTokenRefresh(cache);
    expect(cache).toHaveProperty('isRefreshingToken', false);
  });

  it('should inform the store if refresh token call fails', async () => {
    let cache = { isRefreshingToken: false };
    await expect(attemptTokenRefresh(cache)).rejects.toEqual(undefined);
    expect(stores.globalStore.setSessionExpired).toHaveBeenCalledWith(true);
  });
});