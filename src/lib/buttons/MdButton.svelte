<script lang="ts">
  import localStorageStore from "../../lib/stores/localStorage";

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

<button
  class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-mono-accentLight2 duration-150 ease-in-out"
  on:click="{exportToMd}"
  title="Export as Markdown">
  Export Markdown (.md)
</button>
