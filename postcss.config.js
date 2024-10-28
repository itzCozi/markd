import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss({
      mode: "jit",
      content: ["./src/**/*.{svelte,js,ts,html}"],
    }),
    autoprefixer,
  ],
};
