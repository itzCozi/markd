import type { Config } from "remark-github-beta-blockquote-admonitions";

export const defaultConfig: Config = {
  classNameMaps: {
    block: (title) => {
      const baseClass = "admonition";
      const typeClass = title.toLowerCase();
      return `${baseClass} ${typeClass}`;
    },
    title: "admonition-title",
  },
  titleFilter: ["[!NOTE]", "[!IMPORTANT]", "[!WARNING]", "[!TIP]", "[!CAUTION]"],
  titleTextMap: (title) => ({
    // To remove the `[!` prefix and `]` suffix
    displayTitle: title.substring(2, title.length - 1),
    checkedTitle: title.substring(2, title.length - 1),
  }),
  dataMaps: {
    block: (data) => data,
    title: (data) => data,
  },
  titleKeepTrailingWhitespaces: false,
  legacyTitle: false,
};