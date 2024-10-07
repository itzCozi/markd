import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

/* This application will be hosted on vercel, surge.sh or Cloudflare pages 
surge.sh - deploy from command line using `pnpm surge`
vercel - deploy from webUI avoiding this due to high cost
Cloudflare pages - deploy from webUI, having issues with adapter here only
*/

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  }
};

export default config;