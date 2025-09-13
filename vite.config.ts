import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set up path aliases to match the existing project structure
      '@': resolve(__dirname, 'src'),
    },
  },
  // Match the existing public folder structure from Create React App
  publicDir: 'public',
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000, // Same default port as CRA
    open: true,
  },
}); 