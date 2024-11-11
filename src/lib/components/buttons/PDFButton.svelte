<script lang="ts">
  import DropdownButton from "$lib/components/buttons/DropdownButton.svelte";
  import { markdownTheme } from "$lib/stores/themeStore";

  // Print instead of pdf export
  async function printContent() {
    const overlay = document.createElement("div");
    overlay.id = "export-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "#121212";
    overlay.style.color = "white";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999"; // such great practice
    overlay.style.fontSize = "2rem";
    overlay.innerText = "Exporting...";
    document.body.appendChild(overlay);

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

    overlay.id = "export-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "#121212";
    overlay.style.color = "white";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";
    overlay.style.fontSize = "2rem";
    overlay.innerText = "Reloading...";
    document.body.appendChild(overlay);

    if (originalTheme !== "light") {
      markdownTheme.update((theme) => "dark");
    }

    window.location.reload();
  }
</script>

<DropdownButton
  onClick={printContent}
  file="pdf"
  title="Export as PDF">
  Export as PDF
</DropdownButton>
