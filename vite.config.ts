import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import postcss from "./postcss.config.js";
import { resolve } from "path";

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    postcss
  },
  build: {
    minify: 'esbuild',
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte', 'svelte/internal']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['svelte', 'svelte/internal'],
    exclude: ['@sveltejs/kit']
  },
  server: {
    fs: {
      allow: [
        resolve(__dirname, '.'),
        resolve(__dirname, 'static')
      ]
    }
  },
  cacheDir: 'node_modules/.vite',
});
