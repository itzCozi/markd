<script lang="ts">
  import DropdownButton from "$lib/components/DropdownButton.svelte";
  import localStorageStore from "../../stores/localStorage";

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
  className=""
  onClick="{exportToMd}"
  title="Export as Markdown">
  Export Markdown (.md)
</DropdownButton>
