
import axios from 'axios'

export const baseURL = '/api';

// create an axios instance
const http = axios.create({
  baseURL,
  timeout: 15000,
});

// request interceptor
http.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

// response interceptor
http.interceptors.response.use(
  response => {
    if (response.data.status !== 200) {
      return Promise.reject(response.data.message);
    }
    return response;
  },
  error => Promise.reject(error),
);

export default http;


