import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import postcss from './postcss.config.js';
import { resolve } from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    postcss,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    fs: {
      allow: [
        // Add the directory containing the favicon.svg file
        resolve(__dirname, 'static')
      ]
    }
  }
});