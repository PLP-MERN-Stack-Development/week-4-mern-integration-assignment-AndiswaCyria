import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export const postService = {
  getAllPosts: () => api.get('/posts').then((res) => res.data),
  getPost: (id) => api.get(`/posts/${id}`).then((res) => res.data),
  createPost: (data) => api.post('/posts', data).then((res) => res.data),
  deletePost: (id) => api.delete(`/posts/${id}`).then((res) => res.data),
};

export const categoryService = {
  getAllCategories: () => api.get('/categories').then((res) => res.data),
};

export const authService = {
  login: (credentials) =>
    api.post('/auth/login', credentials).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      return res.data;
    }),
  getCurrentUser: () => JSON.parse(localStorage.getItem('user')),
};

export default api;
