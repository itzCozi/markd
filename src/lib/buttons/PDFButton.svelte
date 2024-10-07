<script lang="ts">
  // Print instead of pdf export
  async function printContent() {
    const element = document.querySelector(".markdown-content");
    if (!element) {
      console.error("Element not found");
      return;
    }

    const body = document.body;
    body.innerHTML = element.outerHTML;

    const toolbar = document.querySelector(".renderer-toolbar");
    if (toolbar) {
      toolbar.remove();
    }

    const style = document.createElement("style");
    style.innerHTML = `
    @media print {
      .renderer {
        display: block !important;
        width: 100% !important;
      }
    }
  `;
    document.head.appendChild(style);

    window.print();

    window.location.reload();
  }
</script>

<button
  class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-gray-200 hover:text-gray-900"
  on:click={printContent}>
  Export as PDF (.pdf)
</button>
