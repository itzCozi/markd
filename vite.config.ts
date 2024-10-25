import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import postcss from "./postcss.config.js";
import { resolve } from "path";

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    postcss
  },
  server: {
    fs: {
      allow: [
        resolve(__dirname, '.'),
        resolve(__dirname, 'static')
      ]
    }
  }
});