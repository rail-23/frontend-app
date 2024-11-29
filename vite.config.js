import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['jwt-decode'], // Marca jwt-decode como externo para evitar problemas
    },
  },
});
