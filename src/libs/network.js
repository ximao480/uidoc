import axios from 'axios';


const CancelToken = axios.CancelToken;

Vue.$httpRequestList = [];
const pending  = {};




let postConfig = {};


// 当post请求content-Type: application/x-www-form-urlencoded时，需要将JSON参赛转换成如下函数输入的形式。
export const urlSearchParams = (data) => {
  const params = new URLSearchParams();
  Object.keys(data).forEach((key) => {
    const dataType = Object.prototype.toString.call(data[key]);
    if (dataType === '[object Object]' || dataType === '[object Array]') {
      data[key] = JSON.stringify(data[key]);
    }
    params.append(key, data[key]);
  });
  return params;
};

function NetworkConstructor() {
  this.post = (url, config) => {
    postConfig = config;
    if (config && config.params) {
      const message = config.params;
      return axios.post(url, message);
    }
    return axios.post(url, config);
  };
  this.get = (url, params) => {
    postConfig = params;
    return axios.get(url, params);
  };
}
export const http = new NetworkConstructor();


