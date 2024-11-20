import { derived } from "svelte/store";
import { markdownTheme } from "./themeStore";

export const rendererTheme = derived(markdownTheme, ($markdownTheme) =>
  $markdownTheme === "light" ? "light-plus" : "dark-plus",
);
