import type { Config } from "remark-github-beta-blockquote-admonitions";

export const defaultConfig: Config = {
  classNameMaps: {
    block: (title) => {
      const typeClass = title.toLowerCase();
      return `admonition ${typeClass}`;
    },
    title: "admonition-title",
  },
  titleFilter: ["[!NOTE]", "[!IMPORTANT]", "[!WARNING]", "[!TIP]", "[!CAUTION]"],
  titleTextMap: (title) => {
    const displayTitle =
      ["[!NOTE]", "[!IMPORTANT]", "[!WARNING]", "[!TIP]", "[!CAUTION]"].includes(title) ? "" : (
        title.substring(2, title.length - 1)
      );
    return {
      displayTitle,
      checkedTitle: title.substring(2, title.length - 1),
    };
  },
  dataMaps: {
    block: (data) => data,
    title: (data) => data,
  },
  titleKeepTrailingWhitespaces: false,
  legacyTitle: false,
};
