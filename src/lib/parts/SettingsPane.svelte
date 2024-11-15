<script lang="ts">
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  import { userEditorTheme, editorTheme } from "$lib/stores/editorThemeStore";
  import ThemeToggle from "$lib/components/buttons/ThemeToggle.svelte";
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
        <input
          class="text-type-primary block py-1 bg-mono-accentLight1 rounded-sm outline-none w-28 text-center caret-type-primary"
          placeholder={$editorTheme}
          bind:value={$userEditorTheme} />
      </div>
      <Paragraph className="text-sm">
        All themes are from shiki, you can find them <a
          href="https://shiki.matsu.io/themes"
          title="Available themes">here</a>
      </Paragraph>
    </div>
  </div>
</div>
