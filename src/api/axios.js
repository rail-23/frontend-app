import axios from 'axios';

// Configuración de axios
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000', // URL dinámica para backend
});

// Interceptor para incluir el token en cada solicitud
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-access-token'] = token; // Header personalizado
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
