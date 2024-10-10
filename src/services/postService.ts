import { AxiosResponse } from 'axios';
import { axiosInstance } from '@interceptors/index';
import { Post } from '@pages/Dashboard/Dashboard';

export const getPostsService = (): Promise<AxiosResponse> => {
  return axiosInstance.get('/posts/?_page=1&_limit=8');
};

export const createPostsService = (
  state: Partial<Post>,
): Promise<AxiosResponse> => {
  return axiosInstance.post('/posts', state);
};

export const modifyPostsService = (
  id: number,
  state: Partial<Post>,
): Promise<AxiosResponse> => {
  return axiosInstance.put(`/posts/${id}`, state);
};
