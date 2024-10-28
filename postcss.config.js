import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss({
      mode: 'jit',
      purge: {
        enabled: true,
        content: ['./src/**/*.{svelte,html,js,ts}'],
      },
      content: ['./src/**/*.{svelte,js,ts}'],
    }),
    autoprefixer,
  ],
};
