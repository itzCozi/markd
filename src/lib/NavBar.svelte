<script lang="ts">
  import jsPDF from "jspdf";
  import html2canvas from "html2canvas";
  import { Menu, FileText } from "lucide-svelte";
  import Sidebar from "$lib/Sidebar.svelte";

  let isSidebarOpen = false;

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function closeSidebar() {
    isSidebarOpen = false;
  }

  // We gotta do all of this without changing the DOM
  async function exportToPDF() {
    const element = document.querySelector(".markdown-content") as HTMLElement;
    if (!element) {
      console.error("Element not found");
      return;
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

    for (let i = 0; i < totalPages; i++) {
      const canvas = await html2canvas(element, {
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png");
      if (i > 0) {
        pdf.addPage();
      }
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
    }

    pdf.save("document.pdf");
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
        <p class="text-4xl font-bold">MarkD</p>
      </div>
    </a>
    <div class="flex flex-row gap-3 items-center">
      <!-- https://flowbite-svelte.com/docs/components/dropdown -->
      <button
        class="text-left p-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 rounded"
        title="Export"
        on:click={exportToTxt}>
        <FileText />
      </button>
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
