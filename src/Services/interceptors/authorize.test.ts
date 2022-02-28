import { authHeader } from '../../_helpers';
import axios from 'axios';
jest.mock('axios');
import authorize from './authorize';
jest.mock('../../_helpers', () => {
  return {
    authHeader: jest.fn(() => {
      return {
        'Authorization': 'Bearer token123'
      };
    })
  };
});

describe('authorize', () => {
  it('triggers always if set', async () => {
    await expect(authorize.trigger({}, axios)).resolves.toEqual(true);
  });

  it('should inject the access token in the axios config', async () => {
    let config = {};
    let response = await authorize.handler(config, axios);
    expect(config).toHaveProperty('headers.Authorization', 'Bearer token123');
  });

});