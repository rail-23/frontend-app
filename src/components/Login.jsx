import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/services';
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
            alert('Inicio de sesión exitoso.');

            // Guarda el token en localStorage
            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            // Obtén el rol desde localStorage
            const userRole = localStorage.getItem('rol');

            // Redirige según el rol del usuario
            if (userRole === 'estudiante') {
                navigate('/estudiante');
            } else if (userRole === 'decano') {
                navigate('/decano');
            } else if (userRole === 'vicerrector') {
                navigate('/vicerrector');
            } else {
                throw new Error('Rol desconocido');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            alert('Error en el inicio de sesión. Por favor, intenta nuevamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Contraseña:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default Login;

