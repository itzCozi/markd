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
      h1, h2, h3, h4, h5, h6, p, ul, li, pre, table {
        color: black;
      }
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
  class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-[#ced2d9] hover:text-gray-900 hover:shadow-xl duration-200 scale-hover"
  on:click="{printContent}"
  title="Export as PDF">
  Export as PDF (.pdf)
</button>

<style>
  .scale-hover {
    transition: transform 0.2s;
  }
  .scale-hover:hover {
    transform: scale(1.01);
  }
</style>
