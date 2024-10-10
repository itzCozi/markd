import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";

type LocalStorageKey = "markdownTheme" | "userPreferences" | "otherKey";

function createPersistentStore<T extends string>(
  key: LocalStorageKey,
  initialValue: T
): Writable<T> {
  let data: T;

  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem(key);
    data = storedValue ? (JSON.parse(storedValue) as T) : initialValue;
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
        .carta-renderer li,
        .carta-renderer pre {
          color: black;
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
