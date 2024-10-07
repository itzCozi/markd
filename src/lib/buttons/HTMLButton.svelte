<script lang="ts">
  function exportAsHtml() {
    const element = document.querySelector(".markdown-content");
    if (!element) {
      console.error("Element not found");
      return;
    }

    const toolbar = document.querySelector(".renderer-toolbar");
      if (toolbar) {
        toolbar.remove();
      }

    const html = element.outerHTML;
    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.html";
    link.click();
    URL.revokeObjectURL(link.href);

    window.location.reload();
  }
</script>

<button
  class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-gray-200 hover:text-gray-900"
  on:click={exportAsHtml}>
  Export as HTML (.html)
</button>