import axios, { AxiosResponse } from 'axios';
import store from '../../stores';
import { storeTokenResponse, storage } from '../../_helpers';
import { fetchToken, login, refreshToken, signout, isTokenExpired, isTokenPresent } from './forge';
import { WA_SIGN_OUT_STATE, WA_SIGN_OUT_REASON } from '../../models/GlobalConstants';

jest.mock('axios', () => {
  let mockPost = jest.fn().mockResolvedValue({});
  return {
    post: mockPost,
    create: jest.fn(() => {
      return {
        post: mockPost,
        interceptors: {
          response: {
            use: jest.fn()
          }
        }
      };
    })
  };
});
jest.mock('../../stores', () => {
  return {
    globalStore: {
      EnvVaribles: {
        waClientId: 'waClientId',
        waRedirectUri: 'waRedirectUri',
        waTokenUri: 'waTokenUri',
        waAuthuri: 'waAuthuri',
        waScope: 'waScope',
        waState: 'waState',
        waLogoutRedirectUri: 'waLogoutRedirectUri',
        waLogoutUri: 'waLogoutUri'
      },
      postLogoutRedirectUrl: 'postLogoutRedirectUrl'
    },
    routerStore: {
      route: {
        params: {
          code: 'code'
        }
      }
    }
  };
});
jest.mock('../../_helpers', () => {
  return {
    storeTokenResponse: jest.fn(),
    storage: {
      setItem: jest.fn(),
      getItem: jest.fn(),
      clear: jest.fn()
    }
  };
});

describe('forge', () => {
  let windowSpy: any;
  it('should login', () => {
    expect(login()).toEqual(undefined);
  });

  it('should login and pass login_hint', () => {
    expect(login(undefined, 'login_hint')).toEqual(undefined);
  });

  it('should fetch token', async () => {
    await expect(fetchToken()).resolves.toEqual(undefined);
  });

  it('should refresh token', async () => {
    await expect(refreshToken(1)).resolves.toEqual(undefined);
  });

  describe('signout', () => {
    let oldValue: any;

    beforeEach(() => {
      oldValue = store.globalStore.postLogoutRedirectUrl;
    })

    afterEach(() => {
      store.globalStore.postLogoutRedirectUrl = oldValue;
    })

    it('should signout', async () => {
      await expect(signout(false)).resolves.toEqual(undefined);
    });
  
    it('should signout with logout redirect url from env if its not present in store', async () => {
      store.globalStore.postLogoutRedirectUrl = '';
      await expect(signout(false)).resolves.toEqual(undefined);
    })
  })

  it('should set signout reason', async () => {
    (storage.setItem as any).mockImplementationOnce(jest.fn());
    await signout(false, 'reason');
    expect(storage.setItem).toHaveBeenCalledWith(WA_SIGN_OUT_REASON, 'reason');
  });

  it('is token present',()=>{
    storage.getItem = jest.fn().mockImplementationOnce((param:string)=>{
      let tempobj: any = {access_token:true, refresh_token:true};
      return tempobj[param];
    });
    expect(isTokenPresent()).toBeFalsy();

  });

  it('checks if token is expired or null',()=>{
    storage.getItem = jest.fn().mockImplementationOnce((param:string)=>{
      let tempobj: any = {exp:null};
      return tempobj[param];
    });
    expect(isTokenExpired()).toBeTruthy();
  });

  it('checks if token is expired',()=>{
    storage.getItem = jest.fn().mockImplementationOnce((param:string)=>{
      let tempobj: any = {exp:'1593251599'};
      return tempobj[param];
    });
    expect(isTokenExpired()).toBeDefined();
  });
});