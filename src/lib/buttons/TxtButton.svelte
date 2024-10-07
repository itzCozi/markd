<script lang="ts">
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

<button
  class="block w-full px-4 py-2 text-sm text-type-primary hover:bg-gray-200 hover:text-gray-900"
  on:click={exportToTxt}>
  Export as Text (.txt)
</button>
