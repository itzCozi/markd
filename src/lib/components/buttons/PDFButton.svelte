<script lang="ts">
  import DropdownButton from "$lib/components/buttons/DropdownButton.svelte";
  import { userEditorTheme } from "$lib/stores/editorThemeStore";
  import { markdownTheme } from "$lib/stores/themeStore";

  async function printContent() {
    const originalTheme = $markdownTheme;
    const originalEditorTheme = $userEditorTheme;

    // Switch to light theme for printing
    if ($markdownTheme !== "light") {
      markdownTheme.update(() => "light");
    }
    if ($userEditorTheme !== "light-plus") {
      userEditorTheme.update(() => "light-plus");
    }

    // Allow theme styles to apply
    await new Promise((resolve) => setTimeout(resolve, 300));

    window.print();

    // Restore original theme
    if (originalTheme !== "light") {
      markdownTheme.update(() => "dark");
    }
    if (originalEditorTheme !== "light-plus") {
      userEditorTheme.update(() => originalEditorTheme);
    }
  }
</script>

<DropdownButton
  onClick={printContent}
  file="pdf"
  title="Export as PDF">
  Export as PDF
</DropdownButton>
