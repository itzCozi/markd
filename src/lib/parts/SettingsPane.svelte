<script lang="ts">
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  import { userEditorTheme, editorTheme } from "$lib/stores/editorThemeStore";
  import ThemeToggle from "$lib/components/buttons/ThemeToggle.svelte";
  import TextButton from "$lib/components/buttons/TextButton.svelte";

  let themes = [
    "dark-plus",
    "light-plus",
    "andromeeda",
    "aurora-x",
    "ayu-dark",
    "catppuccin-frappe",
    "catppuccin-latte",
    "catppuccin-macchiato",
    "catppuccin-mocha",
    "dracula",
    "dracula-soft",
    "everforest-dark",
    "everforest-light",
    "github-dark",
    "github-dark-default",
    "github-dark-dimmed",
    "github-dark-high-contrast",
    "github-light",
    "github-light-default",
    "github-light-high-contrast",
    "houston",
    "kanagawa-dragon",
    "kanagawa-lotus",
    "kanagawa-wave",
    "laserwave",
    "material-theme",
    "material-theme-darker",
    "material-theme-lighter",
    "material-theme-ocean",
    "material-theme-palenight",
    "min-dark",
    "min-light",
    "monokai",
    "night-owl",
    "nord",
    "one-dark-pro",
    "one-light",
    "plastic",
    "poimandres",
    "red",
    "rose-pine",
    "rose-pine-dawn",
    "rose-pine-moon",
    "slack-dark",
    "slack-ochin",
    "snazzy-light",
    "solarized-dark",
    "solarized-light",
    "synthwave-84",
    "tokyo-night",
    "vesper",
    "vitesse-black",
    "vitesse-dark",
    "vitesse-light",
  ];

  function resetThemeToDefault() {
    userEditorTheme.set(null);
  }

  function reloadPage() {
    window.location.reload();
  }
</script>

<div class="w-full h-full">
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <Paragraph className="text-type-primary">Toggle theme</Paragraph>
      <ThemeToggle />
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <Paragraph className="text-type-primary">Editor theme</Paragraph>
        <!-- make this only 600 pixles tall and customize to fit the theme using css -->
        <select
          class="text-type-primary p-1 bg-mono-accentLight1 rounded-sm outline-none w-[120px] caret-type-primary overflow-ellipsis text-center appearance-none"
          bind:value={$userEditorTheme}
          placeholder={$editorTheme}>
          {#each themes as theme}
            <option value={theme}>{theme}</option>
          {/each}
        </select>
      </div>
      <div class="flex justify-between items-center">
        <TextButton
          title="Save theme"
          className="text-sm"
          onClick={() => {
            reloadPage();
          }}>
          Save theme
        </TextButton>
        <TextButton
          title="Reset theme"
          className="text-sm"
          onClick={() => {
            resetThemeToDefault();
            reloadPage();
          }}>
          Reset theme
        </TextButton>
      </div>
      <Paragraph className="text-sm">
        All themes are from shiki, you can find them
        <a
          href="https://shiki.matsu.io/themes"
          title="Available themes">here.</a>
      </Paragraph>
    </div>
  </div>
</div>
