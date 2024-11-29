import jwtDecode from 'jwt-decode';

const decodeToken = (token) => {
    try {
        if (!token) throw new Error('Token no encontrado');
        const decoded = jwt_decode(token);
        if (!decoded.roles) throw new Error('El token no contiene roles válidos');
        return decoded;
    } catch (error) {
        console.error('Error al decodificar el token JWT:', error.message);
        return null;
    }
};

