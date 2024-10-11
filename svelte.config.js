import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/*
  This application will/is be hosted on Cloudflare Pages using the static
  adapter and prerendering.

  Build Config
    - Command: pnpm build
    - Output Directory: /build
    - Install Command: pnpm install
  Or...
  Fork this repository and deploy it to your own Cloudflare Pages account
  using the Github repository you forked.
*/

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  }
};

export default config;