<script lang="ts">
  import { markdownTheme } from "$lib/stores/themeStore";
  import { Sun, Moon } from "lucide-svelte";

  let isLightTheme = false;

  $: isLightTheme = $markdownTheme === "light";

  function toggleMarkdownTheme() {
    markdownTheme.update((theme) => (theme === "light" ? "" : "light"));
  }
</script>

<label
  class="inline-flex items-center cursor-pointer"
  title="Theme Toggle">
  <input
    type="checkbox"
    bind:checked={isLightTheme}
    class="hidden"
    on:change={toggleMarkdownTheme} />

  <span
    class={`relative inline-block w-8 h-5 transition duration-200 ease-in-out ${
      isLightTheme ? "bg-[#F6D365]" : "bg-[#3a3a3a]"
    } rounded-full`}>
    <span
      class={`absolute top-1 left-1 inline-block w-3 h-3 bg-transpartent rounded-full transition-transform duration-200 ease-in-out ${
        isLightTheme ? "translate-x-3" : ""
      }`}>
      {#if isLightTheme}
        <Sun class="w-3 h-3 text-[#3a3a3a]" />
      {:else}
        <Moon class="w-3 h-3 text-white" />
      {/if}
    </span>
  </span>
</label>
