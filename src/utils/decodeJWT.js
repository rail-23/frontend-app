import jwtDecode from 'jwt-decode';

const decodeToken = () => {
  try {
    const token = localStorage.getItem('token'); // Obtener el token desde localStorage
    if (!token) throw new Error('Token no encontrado');

    const decoded = jwtDecode(token); // Decodificar el token

    if (!decoded.roles) {
      throw new Error('El token no contiene roles válidos');
    }

    console.log('Token decodificado:', decoded); // Imprimir el contenido del token
    return decoded;
  } catch (error) {
    console.error('Error al decodificar el token JWT:', error.message); // Manejar errores
    return null;
  }
};

export default decodeToken;
