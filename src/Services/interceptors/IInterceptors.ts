import { AxiosInstance } from 'axios';

export interface IInterceptor {}

export interface IStatefulInterceptor extends IInterceptor {
  state: State;
}

export interface IApiInterceptor<T> extends IStatefulInterceptor {
  trigger: (arg: T, instance: AxiosInstance) => Promise<boolean>;
  handler: (arg: T, instance: AxiosInstance) => Promise<T>;
}

export enum State {
  ON_FULFILLED = 'ON_FULFILLED',
  ON_REJECTED = 'ON_REJECTED'
}

export enum Type {
  REQUEST = 'REQUEST',
  RESPONSE = 'RESPONSE'
}