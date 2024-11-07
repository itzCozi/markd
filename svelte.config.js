import manifest from "./static/manifest.json" assert { type: "json" };
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";
import { VitePWA } from "vite-plugin-pwa";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  },
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        // Why was this set to false?
        manifest: manifest,
      }),
    ],
  },
};

export default config;
