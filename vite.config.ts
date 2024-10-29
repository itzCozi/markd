import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import postcss from "./postcss.config.js";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [sveltekit(), viteCompression({ algorithm: "brotliCompress" })],
  css: {
    postcss,
  },
  build: {
    minify: "esbuild",
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["svelte", "svelte/internal"],
        },
      },
    },
    treeshake: true,
  },
  optimizeDeps: {
    include: ["svelte", "svelte/internal"],
  },
  server: {
    fs: {
      strict: true,
    },
  },
});
