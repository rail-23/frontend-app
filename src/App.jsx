import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Estudiante from './components/Estudiante';
import Decano from './components/Decano';
import Vicerrector from './components/Vicerrector';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/estudiante" element={<ProtectedRoute><Estudiante /></ProtectedRoute>} />
            <Route path="/decano" element={<ProtectedRoute><Decano /></ProtectedRoute>} />
            <Route path="/vicerrector" element={<ProtectedRoute><Vicerrector /></ProtectedRoute>} />
        </Routes>
    );
}

export default App;
