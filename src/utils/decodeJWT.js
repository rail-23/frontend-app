import jwtDecode from 'jwt-decode';

const decodeToken = () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token no encontrado');

    const decoded = jwtDecode(token);

    if (!decoded.roles) {
        throw new Error('El token no contiene roles válidos');
    }

    console.log('Token decodificado:', decoded);
    return decoded;
  } catch (error) {
    console.error('Error al decodificar el token JWT:', error.message);
    return null;
  }
};
