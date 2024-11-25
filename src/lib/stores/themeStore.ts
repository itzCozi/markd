import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";

type LocalStorageKey = "markdownTheme" | "userPreferences" | "otherKey";

function createPersistentStore<T extends string>(
  key: LocalStorageKey,
  initialValue: T,
): Writable<T> {
  let data: T;

  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      data = JSON.parse(storedValue) as T;
    } else {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      data = prefersDarkScheme ? ("dark" as T) : initialValue;
    }
    handleThemeChange(data);
  } else {
    data = initialValue;
  }

  const store = writable<T>(data);

  store.subscribe((value: T) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
      handleThemeChange(value);
    }
  });

  return store;
}

function handleThemeChange(theme: string) {
  if (typeof document === "undefined") return;

  const existingStyleTag = document.getElementById("renderer-style");

  if (theme === "light") {
    if (!existingStyleTag) {
      const style = document.createElement("style");
      style.id = "renderer-style";
      style.innerHTML = `
        .carta-renderer h1,
        .carta-renderer h2,
        .carta-renderer h3,
        .carta-renderer p,
        .carta-renderer ul,
        .carta-renderer li {
          color: black;
        }

        .carta-renderer pre {
          color: black;
          background-color: #dfdfdf;
        }

        .admonition {
          background-color: #dfdfdf;
        }

        .carta-slash {
          --background: #dfdfdf;
          --group-color: #3c3c3c;
          --title-color: #2d2d2d;
          --description-color: #515151;
          --hover-background: #c5c5c5;
          --contrast-background: #d3d3d3;
        }

        .carta-emoji {
          --background: #dfdfdf;
          --group-color: #3c3c3c;
          --title-color: #2d2d2d;
          --description-color: #515151;
          --hover-background: #c5c5c5;
          --contrast-background: #d3d3d3;
        }

        .carta-emoji button:hover,
        .carta-emoji button.carta-active {
          background: var(--hover-background);
        }

        html, body {
          caret-color: black !important;
        }

        .shiki {
          background-color: #f0f0f0 !important;
        }
      `;
      document.head.appendChild(style);
    }
  } else if (existingStyleTag) {
    existingStyleTag.remove();
  }
}

export const markdownTheme = createPersistentStore<string>("markdownTheme", "dark");

if (typeof window !== "undefined") {
  handleThemeChange(get(markdownTheme));
}
