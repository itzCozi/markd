import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const isProduction = process.env.NODE_ENV === "production";

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    ...(isProduction ?
      [
        cssnano({
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
            },
          ],
        }),
      ]
    : []),
  ],
};
