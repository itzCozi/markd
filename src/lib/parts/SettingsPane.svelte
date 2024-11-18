<script lang="ts">
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  import { userEditorTheme, editorTheme } from "$lib/stores/editorThemeStore";
  import ThemeToggle from "$lib/components/buttons/ThemeToggle.svelte";
  import TextButton from "$lib/components/buttons/TextButton.svelte";
  import SmallIconButton from "$lib/components/buttons/SmallIconButton.svelte";
  import { Save } from "lucide-svelte";

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

    <div class="flex flex-col gap-1">
      <div class="flex justify-between items-center">
        <Paragraph className="text-type-primary">Editor theme</Paragraph>
        <div class="relative">
          <input
            class="text-type-primary block py-1 pr-8 bg-mono-accentLight1 rounded-sm outline-none w-[120px] text-center caret-type-primary overflow-scroll"
            bind:value={$userEditorTheme} />
          <div class="absolute right-0 top-1/2 -translate-y-1/2">
            <SmallIconButton
              title="Save theme"
              className="rounded-sm"
              onClick={reloadPage}>
              <Save />
            </SmallIconButton>
          </div>
        </div>
      </div>
      <Paragraph className="text-sm">
        <TextButton
          title="Reset theme"
          className="pb-1"
          onClick={() => {
            resetThemeToDefault();
            reloadPage();
          }}>
          Reset to default
        </TextButton>
        <br />
        All themes are from shiki, you can find them
        <a
          href="https://shiki.matsu.io/themes"
          title="Available themes">here.</a>
      </Paragraph>
    </div>
  </div>
</div>
