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

  // We gotta do all of this without changing the DOM
  async function exportToPDF() {
    // Display a toast notification
    const toast = document.createElement("div");
    toast.textContent = "Processing PDF, please wait...";
    toast.style.position = "fixed";
    toast.style.top = "50%";
    toast.style.left = "50%";
    toast.style.transform = "translate(-50%, -50%)";
    toast.style.background = "rgba(0, 0, 0, 0.8)";
    toast.style.color = "white";
    toast.style.padding = "20px";
    toast.style.borderRadius = "10px";
    toast.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    toast.style.zIndex = "1000";
    document.body.appendChild(toast);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    try {
      const element = document.querySelector(".markdown-content") as HTMLElement;
      if (!element) {
        console.error("Element not found");
        return;
      }

      // Hide .renderer-toolbar
      const toolbar = document.querySelector(".renderer-toolbar") as HTMLElement;
      if (toolbar) {
        toolbar.style.display = "none";
      }

      const originalHeight = element.style.height;
      const originalOverflow = element.style.overflow;
      element.style.height = "auto";
      element.style.overflow = "visible";
      const pdf = new jsPDF("p", "mm", "a4");
      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const canvasHeight = element.scrollHeight;
      const canvasWidth = element.scrollWidth;
      const aspectRatio = canvasWidth / canvasHeight;
      const totalPages = Math.ceil(canvasHeight / pageHeight);

      // Add margins
      const margin = 10; // mm
      const leftMargin = margin;
      const rightMargin = margin;
      const topMargin = margin;
      const bottomMargin = margin;

      for (let i = 0; i < totalPages; i++) {
        const canvas = await html2canvas(element, {
          scale: 2,
        });
        const imgData = canvas.toDataURL("image/png");
        if (i > 0) {
          pdf.addPage();
        }

        // Adjust image position and size to account for margins
        pdf.addImage(
          imgData,
          "PNG",
          leftMargin,
          topMargin,
          pageWidth - leftMargin - rightMargin,
          pageHeight - topMargin - bottomMargin,
        );
      }

      pdf.save("document.pdf");

      // Restore toolbar visibility
      if (toolbar) {
        toolbar.style.display = "";
      }
    } finally {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.removeChild(toast);
      window.location.reload();
    }
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
              on:click={exportToPDF}>
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
