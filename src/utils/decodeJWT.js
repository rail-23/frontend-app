import jwt_decode from 'jwt-decode'; // Importación correcta

const decodeToken = () => {
  try {
    const token = localStorage.getItem('token'); // Obtener el token
    if (!token) throw new Error('Token no encontrado');

    const decoded = jwt_decode(token); // Decodificar el token

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

export default decodeToken;
