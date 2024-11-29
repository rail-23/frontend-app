import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // Asegúrate de usar un alias correcto para jwt-decode
            'jwt-decode': 'jwt-decode/build/esm/index.js',
        },
    },
});
