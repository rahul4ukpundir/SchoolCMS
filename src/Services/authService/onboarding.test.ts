import axios from 'axios';
import * as interceptors from '../interceptors';
const jwt = require('jsonwebtoken');
import { isUserOnBoarded, clearOnBoardingNotification } from './onboarding';
import store from '../../stores';
import { storage } from '../../_helpers';

jest.mock('axios', () => {
  return {
    create: jest.fn()
  };
});
jest.mock('../../stores', () => {
  return {
    globalStore: {
      EnvVaribles: {
        waOnBoardingEndpoint: 'waOnBoardingEndpoint'
      }
    }
  };
});
jest.mock('../../_helpers', () => {
  return {
    storage: {
      getItem: jest.fn((arg) => arg),
      setItem: jest.fn(),
      clear: jest.fn()
    }
  };
});

jest.mock('../interceptors', () => {
  let mockPost = jest.fn((arg) => Promise.resolve('post called'));
  return {
    post: mockPost,
    attachInterceptors: jest.fn().mockImplementation(() => ({
      post: mockPost
    })),
    authorize: {},
    unauthorized: {}
  };
});

jest.mock('jsonwebtoken', () => {
  return {
    decode: jest.fn().mockReturnValue({
      avatar: 'avatar',
      family_name: 'family_name',
      given_name: 'given_name',
      name: 'name',
      preferred_username: 'preferred_username',
      email: 'email',
      sub: 'sub'
    })
  };
});

describe('onboarding', () => {
  it('should call onboarding call', async () => {
    await expect(isUserOnBoarded()).resolves.toEqual('post called');
  });

  it('should call onboarding call', async () => {
    clearOnBoardingNotification();
    expect(storage.setItem).toHaveBeenCalled();
  });
});