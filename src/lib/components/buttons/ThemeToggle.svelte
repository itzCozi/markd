<script lang="ts">
  import { userEditorTheme } from "$lib/stores/editorThemeStore";
  import { markdownTheme } from "$lib/stores/themeStore";
  import { Sun, Moon } from "lucide-svelte";
  import { get } from "svelte/store";

  let isLightTheme = $derived($markdownTheme === "light");

  function toggleMarkdownTheme() {
    const currentTheme = get(markdownTheme);
    const newTheme = currentTheme === "light" ? "dark" : "light";
    markdownTheme.set(newTheme);
    userEditorTheme.set(newTheme === "light" ? "light-plus" : "dark-plus");
  }
</script>

<label
  class="inline-flex items-center cursor-pointer"
  title="Theme Toggle">
  <input
    type="checkbox"
    checked={isLightTheme}
    class="hidden"
    onchange={toggleMarkdownTheme} />

  <span
    class={`relative inline-block w-8 h-5 duration-300 ease-in-out rounded-full ${
      isLightTheme ? "bg-mono-yellowAccent" : "bg-mono-accentLight2"
    }`}>
    <span
      class={`absolute top-1 left-1 inline-block w-3 h-3 rounded-full transition-transform duration-300 ease-in-out ${
        isLightTheme ? "translate-x-3" : ""
      }`}>
      {#if isLightTheme}
        <Sun class="w-3 h-3 text-type-dark" />
      {:else}
        <Moon class="w-3 h-3 text-type-emphasized" />
      {/if}
    </span>
  </span>
</label>
