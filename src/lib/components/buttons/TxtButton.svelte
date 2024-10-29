<script lang="ts">
  import DropdownButton from "$lib/components/DropdownButton.svelte";

  async function exportToTxt() {
    const element = document.querySelector(".markdown-content") as HTMLElement;
    if (!element) {
      console.error("Element not found");
      return;
    }

    const toolbar = document.querySelector(".renderer-toolbar");
    if (toolbar) {
      toolbar.remove();
    }

    const text = element.innerText;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.txt";
    link.click();

    window.location.reload();
  }
</script>

<DropdownButton
  on:click="{exportToTxt}"
  title="Export as TXT">
  Export Plain Text (.txt)
</DropdownButton>
