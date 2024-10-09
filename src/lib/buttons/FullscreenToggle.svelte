<script lang="ts">
  import { Maximize, Minimize } from "lucide-svelte";

  let isFullscreen = false;

  function toggleFullscreen() {
    isFullscreen = !isFullscreen;
    const style = document.createElement("style");
    style.id = "fullscreen-style";
    style.innerHTML = `
      .editor {
        width: ${isFullscreen ? "100%" : "{leftWidth}%"} !important;
      }
      .renderer {
        display: ${isFullscreen ? "none" : "block"} !important;
      }
      .carta-toolbar-left {
        display: ${isFullscreen ? "block" : "none"} !important;
        padding-right: 5px;
      }
    `;
    const existingStyle = document.getElementById("fullscreen-style");
    if (existingStyle) {
      existingStyle.remove();
    }
    document.head.appendChild(style);

    if (!isFullscreen) {
      const writeButton = document.querySelector('.carta-toolbar-left button');
      if (writeButton && writeButton instanceof HTMLElement) {
        writeButton.click();
      }
    }
  }
</script>

<button
  class="fullscreen-toggle text-left p-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 rounded"
  title="Fullscreen Toggle"
  on:click={toggleFullscreen}>
  {#if isFullscreen}
    <Minimize />
  {:else}
    <Maximize />
  {/if}
</button>
