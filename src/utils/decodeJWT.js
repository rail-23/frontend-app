import { decode } from 'jwt-decode';

const decodeToken = () => {
  try {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    if (!token) throw new Error('Token no encontrado');

    const decoded = decode(token); // Decodificar el token

    if (!decoded.roles) {
      throw new Error('El token no contiene roles válidos');
    }

    console.log('Token decodificado:', decoded); // Para verificar el contenido
    return decoded;
  } catch (error) {
    console.error('Error al decodificar el token JWT:', error.message);
    return null;
  }
};

export default decodeToken;
