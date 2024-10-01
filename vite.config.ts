import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import postcss from './postcss.config.js';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// Define __dirname
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    postcss,
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
