import React, { useState } from 'react';
import  useNavigate  from 'react-router-dom';
import  loginUser  from '../api/services';
import decodeToken from '../utils/decodeJWT';
import '../css/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(formData);
            localStorage.setItem('token', data.token);
            alert('Inicio de sesión exitoso.');

            const decodedToken = decodeToken(data.token);
            if (!decodedToken || !decodedToken.roles) throw new Error('No se encontraron roles en el token');

            const userRoles = decodedToken.roles;

            if (userRoles.includes("estudiante")) navigate('/estudiante');
            else if (userRoles.includes("decano")) navigate('/decano');
            else if (userRoles.includes("vicerrector")) navigate('/vicerrector');
        } catch (error) {
            console.error('Error en el inicio de sesión:', error.message);
            alert('Error en el inicio de sesión. Por favor, intenta nuevamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Contraseña:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default Login;
