import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  publicDir: 'public',
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: [
        '..',
        '../node_modules',
        './public'
      ],
      deny: [
        '.git',
        '.env*',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/.DS_Store'
      ]
    },
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    }
  },
  esbuild: {
    sourcemap: false
  }
}); 