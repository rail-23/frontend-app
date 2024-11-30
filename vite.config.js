import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: ['jwt-decode', 'react-router-dom'], // Asegúrate de incluir react-router-dom
    },
    build: {
        rollupOptions: {
            external: ['react-router-dom'], // Si es necesario, declara explícitamente los paquetes externos
        },
    },
});
