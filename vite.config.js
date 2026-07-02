// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // use '/' for user site (alqamahansari.github.io)
  plugins: [react()],
});
