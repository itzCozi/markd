<script lang="ts">
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

<button
  class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-[#ced2d9] hover:text-gray-900 hover:shadow-xl duration-200 scale-hover"
  on:click="{exportAsHtml}"
  title="Export as HTML">
  Export as HTML (.html)
</button>

<style>
  .scale-hover {
    transition: transform 0.2s;
  }
  .scale-hover:hover {
    transform: scale(1.01);
  }
</style>
