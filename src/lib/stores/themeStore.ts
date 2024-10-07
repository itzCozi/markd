// Needs to apply to renderer on page load for mobile.
// This code is messy asf
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

// Create the markdownTheme store
export const markdownTheme = createPersistentStore<string>("markdownTheme", "dark"); // Default to 'dark'

// Function to update the carta-renderer class based on the theme
export function updateCartaRendererClass(theme: string) {
  if (typeof document === "undefined") return; // Check if running in the browser

  const themeClass = `carta-theme__${theme}`;
  const cartaRenderer = document.querySelector(".carta-renderer") as HTMLElement;

  if (cartaRenderer) {
    // Remove old theme classes if they exist
    cartaRenderer.classList.forEach((cls) => {
      if (cls.startsWith("carta-theme__")) {
        cartaRenderer.classList.remove(cls);
      }
    });
    // Add the new theme class
    cartaRenderer.classList.add(themeClass);
  }
}

// Function to initialize the renderer class on load
export function initializeRendererClass() {
  const currentTheme = get(markdownTheme); // Get the current value of the store
  updateCartaRendererClass(currentTheme);
}

// Subscribe to changes in the markdownTheme store to update the carta-renderer class
markdownTheme.subscribe((theme) => {
  updateCartaRendererClass(theme);
});

// Call this function to set the initial class when the app loads
if (typeof window !== "undefined") {
  initializeRendererClass();
}
