import { InternalAxiosRequestConfig } from 'axios';
import { axiosInstance } from './axiosInstance';
import { getItemFromLocalStorage } from '@utilities/index';

export const AxiosInterceptor = (): void => {
  const token = getItemFromLocalStorage('token');

  const updateHeader = (request: InternalAxiosRequestConfig) => {
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    request.headers['Content-Type'] = 'application/json';

    return request;
  };

  axiosInstance.interceptors.request.use((request) => {
    return updateHeader(request);
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};
