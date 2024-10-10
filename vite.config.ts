import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import postcss from "./postcss.config.js";

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    postcss
  }
});