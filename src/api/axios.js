import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Usar la variable de entorno
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-access-token'] = token; // Agregar token si existe
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
