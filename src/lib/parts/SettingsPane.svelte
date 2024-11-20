<script lang="ts">
  import DropdownContainer from "$lib/components/layout/DropdownContainer.svelte";
  import DropdownButton from "$lib/components/buttons/DropdownButton.svelte";
  import BorderButton from "$lib/components/buttons/BorderButton.svelte";
  import ThemeToggle from "$lib/components/buttons/ThemeToggle.svelte";
  import TextButton from "$lib/components/buttons/TextButton.svelte";
  import { userEditorTheme } from "$lib/stores/editorThemeStore";
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  import { ChevronDown } from "lucide-svelte";

  const themes = [
    "dark-plus",
    "light-plus",
    "andromeeda",
    "aurora-x",
    "ayu-dark",
    "dracula",
    "dracula-soft",
    "catppuccin-frappe",
    "catppuccin-latte",
    "catppuccin-macchiato",
    "catppuccin-mocha",
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
  const preventClose = false;
  let themeMenuOpen = $state(false);

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
      <div class="flex justify-between items-center w-full">
        <Paragraph className="text-type-primary whitespace-nowrap">Editor theme</Paragraph>
        <TextButton
          className="text-type-primary p-1 bg-mono-accentLight1 rounded-sm outline-none min-w-[110px] w-auto ml-4 h-[32px] text-center cursor-pointer select-none flex-shrink break-words truncate flex items-center justify-center gap-1"
          onClick={() => {
            toggleThemeMenu();
          }}
          title="Select theme">
          <p
            class="overflow-hidden text-ellipsis"
            title={$userEditorTheme}>
            {$userEditorTheme}
          </p>
          <ChevronDown size={17} />
        </TextButton>
        {#if themeMenuOpen}
          <div
            class="fixed inset-0 bg-opacity-0 z-40 transition-opacity duration-200 cursor-default"
            class:opacity-0={!themeMenuOpen}
            class:pointer-events-none={!themeMenuOpen}
            role="button"
            tabindex="0"
            onclick={() => {
              toggleThemeMenu();
            }}
            onkeydown={(e) => e.key === "Enter" && toggleThemeMenu()}>
          </div>
          <div class="end-0 absolute z-50 mr-3 mt-4">
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
          </div>
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
        Apply theme
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
  </div>
</div>
