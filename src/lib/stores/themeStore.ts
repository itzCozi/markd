import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";

type LocalStorageKey = "markdownTheme" | "userPreferences" | "otherKey";

function createPersistentStore<T>(key: LocalStorageKey, initialValue: T): Writable<T> {
  let data: T;

  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem(key);
    data = storedValue ? JSON.parse(storedValue) : initialValue;
  } else {
    data = initialValue;
  }

  const store = writable<T>(data);

  store.subscribe((value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  });

  return store;
}

export const markdownTheme = createPersistentStore<string>("markdownTheme", "dark"); // Default to 'dark'
