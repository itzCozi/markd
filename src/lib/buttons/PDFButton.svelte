<script lang="ts">
  import { markdownTheme } from "$lib/stores/themeStore";

  // Print instead of pdf export
  async function printContent() {

    const originalTheme = $markdownTheme;

    if ($markdownTheme === "light") {
      console.error("theme is light");
    } else {
      markdownTheme.update((theme) => (theme === "light" ? "" : "light"));
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

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
      h1, h2, h3, h4, h5, h6, p, ul, li, table {
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

    if (originalTheme !== "light") {
      markdownTheme.update((theme) => "dark");
    }

    window.location.reload();
  }
</script>

<button
  class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-mono-accentLight2 hover:shadow-xl duration-150"
  on:click="{printContent}"
  title="Export as PDF">
  Export as PDF (.pdf)
</button>