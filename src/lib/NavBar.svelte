<script lang="ts">
  import jsPDF from "jspdf";
  import html2canvas from "html2canvas";
  import { Menu, FileText } from "lucide-svelte";
  import Sidebar from "$lib/Sidebar.svelte";
  import ThemeToggle from "$lib/ThemeToggle.svelte";

  let isSidebarOpen = false;
  let exportMenuOpen = false;

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function closeSidebar() {
    isSidebarOpen = false;
  }

  // Print instead of pdf export
  async function printContent() {
    const element = document.querySelector(".markdown-content");
    if (!element) {
      console.error("Element not found");
      return;
    }

  const body = document.body;
  const originalHtml = body.innerHTML;
  body.innerHTML = element.outerHTML;

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

  body.innerHTML = originalHtml;
  document.head.removeChild(style);
  window.location.reload();
}

  async function exportToTxt() {
    const element = document.querySelector(".markdown-content") as HTMLElement;
    if (!element) {
      console.error("Element not found");
      return;
    }

    const text = element.innerText;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.txt";
    link.click();
  }
</script>

<header class="w-full p-4 bg-mono-card shadow-lg z-20">
  <nav class="flex justify-between items-center">
    <a href="/" title="Home" class="hover:no-underline">
      <div class="flex flex-row gap-3 items-center hover:scale-105 duration-100">
        <img src="/favicon.svg" alt="logo" class="w-10 h-10" />
        <p class="text-4xl font-bold text-type-primary">MarkD</p>
      </div>
    </a>
    <div class="flex flex-row gap-3 items-center">
      <!-- https://flowbite-svelte.com/docs/components/dropdown -->
      <!-- Export dropdown menu -->
      <div class="relative inline-block text-left">
        <button
          class="text-left p-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 rounded"
          title="Export"
          on:click={() => {
            // Toggle export menu
            exportMenuOpen = !exportMenuOpen;
          }}>
          <FileText />
        </button>
        {#if exportMenuOpen}
          <div
            class="origin-top-right z-40 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-mono-card ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1">
            <button
              class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-gray-200 hover:text-gray-900"
              on:click={exportToTxt}>
              Export as Text (.txt)
            </button>
            <button
              class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-gray-200 hover:text-gray-900"
              on:click={printContent}>
              Export as PDF (.pdf)
            </button>
            <button
              class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-gray-200 hover:text-gray-900"
              on:click={() => {
                const element = document.querySelector(".markdown-content");
                if (!element) {
                  console.error("Element not found");
                  return;
                }

                const html = element.outerHTML;
                const blob = new Blob([html], { type: "text/html" });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "document.html";
                link.click();
              }}>
              Export as HTML (.html)
            </button>
          </div>
        {/if}
      </div>
      <ThemeToggle />
      <button
        class="text-left p-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 rounded"
        title="Navigation"
        on:click={toggleSidebar}>
        <Menu />
      </button>
    </div>
  </nav>
</header>

<Sidebar {isSidebarOpen} {closeSidebar} />
