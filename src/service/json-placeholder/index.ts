import { request } from '../../utils/request';

const API = {
  getPosts: (page: string) => request.get(`/posts/${page}/comments`),
};

export default API;
