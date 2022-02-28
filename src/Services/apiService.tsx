import axios, { AxiosResponse } from "axios";

export const apiService = {
  POSTCALL,
  PUTCALL,
  GETCALL,
  DELETECALL,
  GETENVIROMENTVARIBLES,
};


/* istanbul ignore next*/
async function POSTCALL(urlMethodName: any, params: any, delay: any, config: any= {}) {
  return axios
    .post(urlMethodName, JSON.stringify(params), config )
    .then((response: AxiosResponse) => response.data);
}

/* istanbul ignore next*/
async function PUTCALL(urlMethodName: any, params: any, delay: any,  config: any= {}) {
  return axios
    .put(urlMethodName, JSON.stringify(params), config)
    .then((response: AxiosResponse) => response.data);
}
/* istanbul ignore next*/
async function GETCALL(urlMethodName: any, params: any, delay: any,  config: any= {}) {
  return axios
    .get(urlMethodName, config)
    .then((response: AxiosResponse) => response.data);
}
/* istanbul ignore next*/
async function DELETECALL(urlMethodName: any, params: any, delay: any,  config: any= {}) {
  return axios
    .delete(urlMethodName, config)
    .then((response: AxiosResponse) => response.data);
}
/* istanbul ignore next*/
async function GETENVIROMENTVARIBLES(keyname: any) {
  // let test = await (window as {[key:string]: any})["envVars"]["waRedirectUri"] as string;
  let configEnv = (await (window as { [key: string]: any })["envVars"][
    keyname
  ]) as string;

  return configEnv;
}
