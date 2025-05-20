import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VERCEL_URL || 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});