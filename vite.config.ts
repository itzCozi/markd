import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import viteCompression from "vite-plugin-compression";
import path from "path";
import postcss from "./postcss.config.js";

export default defineConfig({
  plugins: [sveltekit(), viteCompression({ algorithm: "brotliCompress" })],
  css: {
    postcss,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
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
