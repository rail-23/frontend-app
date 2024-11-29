import axios from 'axios';

const instance = axios.create({
  baseURL: https://react-mern-express.onrender.com// Usar la variable de entorno
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
