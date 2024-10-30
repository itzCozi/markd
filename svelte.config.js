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
        manifest: {
          name: "MarkD",
          short_name: "MarkD",
          description:
            "An advanced, opinionated live Markdown editor built with SvelteKit from scratch.",
          start_url: "/",
          display: "standalone",
          background_color: "#202020",
          theme_color: "#202020",
          icons: [
            {
              src: "/favicon.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/favicon.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  },
};

export default config;
