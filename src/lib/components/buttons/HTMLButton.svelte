<script lang="ts">
  import DropdownButton from "$lib/components/buttons/DropdownButton.svelte";

  function exportAsHtml() {
    const element = document.querySelector(".markdown-body");
    if (!element) {
      console.error("Element not found");
      return;
    }

    const toolbar = document.querySelector(".renderer-toolbar");
    if (toolbar) {
      toolbar.remove();
    }

    const html = element.innerHTML;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "export.html";
    a.click();
    URL.revokeObjectURL(url);

    window.location.reload();
  }
</script>

<DropdownButton
  onClick={exportAsHtml}
  file="html"
  title="Export as HTML">
  Export as HTML
</DropdownButton>
