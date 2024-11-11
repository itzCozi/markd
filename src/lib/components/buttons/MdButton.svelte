<script lang="ts">
  import DropdownButton from "$lib/components/buttons/DropdownButton.svelte";
  import localStorageStore from "$lib/stores/localStorage";

  let source = localStorageStore.get("markdown") || "";

  async function exportToMd() {
    const blob = new Blob([source], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.md";
    link.click();

    window.location.reload();
  }
</script>

<DropdownButton
  onClick={exportToMd}
  file="md"
  title="Export as Markdown">
  Export Workspace
</DropdownButton>
