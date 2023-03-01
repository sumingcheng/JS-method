import axios from 'axios';
import { Message } from 'element-ui';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true // 跨域请求时发送cookie，当然不发也可以
});

// request拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    if (store.getters.token) {
      // 让每个请求携带token
      config.headers['X-Token'] = getToken();
    }
    return config;
  },
  error => {
    // 处理请求错误
    Promise.reject(error);
  }
);

// response拦截器
service.interceptors.response.use(
  response => {
    // 在接收响应做些什么，比如说将响应数据统一格式化
    const res = response.data;
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject('error');
    } else {
      return response.data;
    }
  },
  error => {
    // 处理响应错误
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
