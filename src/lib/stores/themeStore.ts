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
  document.documentElement.classList.toggle("light", theme === "light");
}

export const markdownTheme = createPersistentStore<string>("markdownTheme", "dark");

if (typeof window !== "undefined") {
  handleThemeChange(get(markdownTheme));
}
