<script lang="ts">
  import "@/global.css";
  import jsPDF from "jspdf";
  import html2canvas from "html2canvas";
  export let source: string; // Receive the source prop

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

<header class="w-full p-4 bg-mono-accent shadow-lg z-20">
  <nav class="flex justify-between items-center">
    <div class="flex flex-row gap-3 items-center">
      <a href="/"
        ><img src="/favicon.svg" alt="logo" class="w-10 h-10 hover:scale-110 duration-200" /></a>
      <p class="text-3xl font-semibold cursor-default">MarkD</p>
    </div>
    <div class="flex flex-row gap-3 items-center">
      <button
        class="text-left px-4 py-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 rounded"
        on:click={exportToPDF}>Export to PDF</button>
      <button
        class="text-left px-4 py-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 rounded"
        on:click={exportToTxt}>Export to TXT</button>
    </div>
  </nav>
</header>
