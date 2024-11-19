<script lang="ts">
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  import { userEditorTheme, editorTheme } from "$lib/stores/editorThemeStore";
  import ThemeToggle from "$lib/components/buttons/ThemeToggle.svelte";
  import TextButton from "$lib/components/buttons/TextButton.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import DropdownContainer from "$lib/components/layout/DropdownContainer.svelte";
  import { Menu, FileText, CircleHelp } from "lucide-svelte";
  import IconButton from "$lib/components/buttons/IconButton.svelte";
  import Sidebar from "$lib/parts/Sidebar.svelte";
  import PdfButton from "$lib/components/buttons/PDFButton.svelte";
  import HtmlButton from "$lib/components/buttons/HTMLButton.svelte";
  import FullscreenToggle from "$lib/components/buttons/FullscreenToggle.svelte";
  import MdButton from "$lib/components/buttons/MdButton.svelte";
  import DropdownButton from "$lib/components/buttons/DropdownButton.svelte";
  import BorderButton from "$lib/components/buttons/BorderButton.svelte";

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
  let themeMenuOpen = $state(false);
  let preventClose = false;

  function closeThemeMenu() {
    const themeMenu = document.querySelector(".theme-dropdown");
    if (themeMenu && !preventClose) {
      themeMenuOpen = false;
    }
  }

  function toggleThemeMenu() {
    if (!preventClose) {
      themeMenuOpen = !themeMenuOpen;
    }
  }

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
        <!-- make this only 600 pixels tall and customize to fit the theme using css -->
        <div class="relative inline-block text-left">
          <button
            type="button"
            class="text-type-primary p-1 bg-mono-accentLight1 rounded-sm outline-none w-[110px] overflow-ellipsis text-center cursor-pointer select-none"
            onclick={() => {
              toggleThemeMenu();
            }}
            title="Select theme"
            aria-label="Select theme">
            {$userEditorTheme}
          </button>
          {#if themeMenuOpen}
            <DropdownContainer
              id="theme-dropdown"
              height="h-52">
              {#each themes as selectableEditorTheme}
                <DropdownButton
                  onClick={() => {
                    userEditorTheme.update((theme) => selectableEditorTheme);
                    toggleThemeMenu();
                  }}
                  title={selectableEditorTheme}>
                  {selectableEditorTheme}
                </DropdownButton>
              {/each}
            </DropdownContainer>
          {/if}
        </div>
      </div>
      <div class="flex justify-between items-center">
        <BorderButton
          title="Save theme"
          className="text-sm"
          onClick={() => {
            reloadPage();
          }}>
          Save theme
        </BorderButton>
        <BorderButton
          title="Reset theme"
          className="text-sm"
          onClick={() => {
            resetThemeToDefault();
            reloadPage();
          }}>
          Reset theme
        </BorderButton>
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
