import { writable, derived } from "svelte/store";
import type { Writable } from "svelte/store";
import { markdownTheme } from "$lib/stores/themeStore";

function createPersistentStore(key: string, initialValue: string | null): Writable<string | null> {
  let data: string | null;

  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem(key);
    data = storedValue !== null ? storedValue : initialValue;
  } else {
    data = initialValue;
  }

  const store = writable<string | null>(data);

  store.subscribe((value: string | null) => {
    if (typeof window !== "undefined") {
      if (value !== null) {
        localStorage.setItem(key, value);
      } else {
        localStorage.removeItem(key);
      }
    }
  });

  return store;
}

export const userEditorTheme = createPersistentStore("userEditorTheme", null);

export const editorTheme = derived(
  [userEditorTheme, markdownTheme],
  ([$userEditorTheme, $markdownTheme]) => {
    if ($userEditorTheme !== null) {
      return $userEditorTheme;
    } else {
      return $markdownTheme === "light" ? "light-plus" : "dark-plus";
    }
  },
);

// Now we can change the editor theme by calling the `setCustomEditorTheme` function.
// This will go on the settingsPane

// import { userEditorTheme } from "$lib/stores/editorThemeStore";

// function setCustomEditorTheme(theme: string) {
//   userEditorTheme.set(theme);
// }
