import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import viteCompression from "vite-plugin-compression";
import path from "path";
import postcss from "./postcss.config.js";

export default defineConfig({
  plugins: [
    sveltekit(),
    viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
    viteCompression({ algorithm: "gzip", ext: ".gz" }),
  ],
  css: {
    postcss,
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    minify: "esbuild",
    target: "esnext",
    cssMinify: true,
    modulePreload: {
      polyfill: false,
    },
  },
  optimizeDeps: {
    include: ["carta-md", "lucide-svelte", "isomorphic-dompurify"],
  },
  server: {
    fs: {
      strict: true,
    },
  },
});
