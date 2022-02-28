import axios, { AxiosResponse } from 'axios';
import { IApiInterceptor, State } from './IInterceptors';
import { attachInterceptors, getInterceptor } from './attachInterceptors';

describe('attachInterceptors', () => {
  it('attaches the passed interceptors to the passed axios instance', () => {
    let mockInterceptor: IApiInterceptor<AxiosResponse> = {
      state: State.ON_FULFILLED,
      trigger: jest.fn().mockReturnValue(Promise.resolve()),
      handler: jest.fn().mockReturnValue(Promise.resolve())
    };
    let response = attachInterceptors(axios.create(), [], [mockInterceptor]);
    expect(response).toBeTruthy();
  });
});

describe('getInterceptor', () => {
  it('returns an interceptor function that calls the handler if the trigger resolves', async () => {
    let mockInterceptor: IApiInterceptor<AxiosResponse> = {
      state: State.ON_FULFILLED,
      trigger: jest.fn().mockReturnValue(Promise.resolve()),
      handler: jest.fn().mockReturnValue(Promise.resolve())
    };
    let response = getInterceptor(mockInterceptor, State.ON_FULFILLED, axios.create());
    expect(response).toBeTruthy();
    await response!({});
    expect(mockInterceptor.trigger).toHaveBeenCalled();
    expect(mockInterceptor.handler).toHaveBeenCalled();
  });

  it('returns an interceptor function that does not call the handler if the trigger rejects', async () => {
    let mockInterceptor: IApiInterceptor<AxiosResponse> = {
      state: State.ON_FULFILLED,
      trigger: jest.fn().mockReturnValue(Promise.reject()),
      handler: jest.fn().mockReturnValue(Promise.resolve())
    };
    let response = getInterceptor(mockInterceptor, State.ON_FULFILLED, axios.create());
    expect(response).toBeTruthy();
    await response!({});
    expect(mockInterceptor.trigger).toHaveBeenCalled();
    expect(mockInterceptor.handler).not.toHaveBeenCalled();
  });

  it('returns undefined if the state of the interceptor does not match with the passed state', async () => {
    let mockInterceptor: IApiInterceptor<AxiosResponse> = {
      state: State.ON_FULFILLED,
      trigger: jest.fn().mockReturnValue(Promise.reject()),
      handler: jest.fn().mockReturnValue(Promise.resolve())
    };
    let response = getInterceptor(mockInterceptor, State.ON_REJECTED, axios.create());
    expect(response).toEqual(undefined);
  });
});