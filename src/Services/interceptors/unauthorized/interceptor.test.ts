import axios from 'axios';
import { attemptTokenRefresh } from './refreshToken';
import interceptor from './interceptor';
jest.mock('axios');
jest.mock('./refreshToken', () => {
  let mockFn = jest.fn().mockReturnValue(Promise.resolve());
  return {
    attemptTokenRefresh: mockFn
  };
});

describe('unauthorized interceptor', () => {
  it('should trigger on unauthorized', async () => {
    await expect(interceptor.trigger({
      config: { retryCount: 0 },
      response: {
        status: 401
      }
    },                               axios)).resolves.toBe(true);
  });

  it('should not trigger otherwise', async () => {
    await expect(interceptor.trigger({
      config: { retryCount: 0 },
      response: {
        status: 404
      }
    },                               axios)).rejects.toEqual(false);
  });

  it('should attempt token refresh if triggered', async () => {
    let mockError = {
      config: {
        retryCount: 0
      }
    };
    let mockFn = jest.fn();
    await interceptor.handler(mockError, <any> mockFn);
    expect(attemptTokenRefresh).toHaveBeenCalled();
  });

  it('should retry the request if token refresh succeeds', async () => {
    let mockError = {
      config: {
        retryCount: 0
      }
    };
    let mockFn = jest.fn();
    await interceptor.handler(mockError, <any> mockFn);
    expect(mockFn).toHaveBeenCalledWith(mockError.config);
    expect(mockError.config.retryCount).toEqual(1);
  });
});