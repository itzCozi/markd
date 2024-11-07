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
        manifest: false,
      }),
    ],
  },
};

export default config;
