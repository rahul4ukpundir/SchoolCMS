import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IApiInterceptor, State } from './IInterceptors';

/**
 * A word about axios interceptors.
 * Interceptors can be chained
 * They will essentially form a .then chain with each interceptor thenning on the return value of the previous one in the chain.
 * So be sure to keep this in mind and pass the response/error forward with a Promise.resolve or Promise.reject if you are not gonna handle it.
 * Also while writing interceptors, bear in mind that the incoming error/response may be modified by the previous handler
 * Works kind of like express middlewares
 * 
 *    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
 *       chain.unshift(interceptor.fulfilled, interceptor.rejected);
 *    });
 *
 *    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
 *      chain.push(interceptor.fulfilled, interceptor.rejected);
 *    });
 *
 *    while (chain.length) {
 *      promise = promise.then(chain.shift(), chain.shift());
 *    }
 * 
 *  -- from the axios source code
 */
export function attachInterceptors(instance: AxiosInstance, requestInterceptors?: IApiInterceptor<any>[], responseInterceptors?: IApiInterceptor<any>[]) {
  if (requestInterceptors && requestInterceptors.length > 0) {
    requestInterceptors.forEach((requestInterceptor: IApiInterceptor<any>) => {
      instance.interceptors.request.use(getInterceptor(requestInterceptor, State.ON_FULFILLED, instance), getInterceptor(requestInterceptor, State.ON_REJECTED, instance));
    });
  }
  if (responseInterceptors && responseInterceptors.length > 0) {
    responseInterceptors.forEach((responseInterceptor: IApiInterceptor<any>) => {
      instance.interceptors.response.use(getInterceptor(responseInterceptor, State.ON_FULFILLED, instance), getInterceptor(responseInterceptor, State.ON_REJECTED, instance));
    });
  }
  return instance;
}

export function getInterceptor(interceptor: IApiInterceptor<any>, state: State, instance: AxiosInstance) {
  if (interceptor.state === state) {
    return (arg: AxiosResponse<any> | AxiosRequestConfig | any) => {
      return interceptor.trigger(arg, instance)
        .then(() => interceptor.handler(arg, instance))
        .catch(() => state === State.ON_FULFILLED ? Promise.resolve(arg) : Promise.reject(arg));
    };
  } else {
    return undefined;
  }
}
