export interface Cache {
  isRefreshingToken: boolean;
  refreshTokenPromise?: Promise<any>;
}