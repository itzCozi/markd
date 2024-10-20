import { writable, get } from "svelte/store";

export const markdownTheme = writable("dark");

function handleThemeChange(theme: string) {
  if (typeof document === "undefined") return;

  const existingStyleTag = document.getElementById("renderer-style");

  if (theme === "light") {
    if (!existingStyleTag) {
      const style = document.createElement("style");
      style.id = "renderer-style";
      style.innerHTML = `
        .renderer {
          width: 100% !important;
        }
        .shiki {
          background-color: #fffff !important;
        }
      `;
      document.head.appendChild(style);
    }
  } else if (existingStyleTag) {
    existingStyleTag.remove();
  }
}

if (typeof window !== "undefined") {
  markdownTheme.subscribe((theme) => {
    handleThemeChange(theme);
  });
}