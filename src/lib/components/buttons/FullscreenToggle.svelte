<script lang="ts">
  import { Maximize, Minimize } from "lucide-svelte";
  import IconButton from "$lib/components/buttons/IconButton.svelte";

  let isFullscreen = $state(false);

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
      .carta-toolbar {
        max-width: ${isFullscreen ? "100%" : "300px"} !important;
        width: ${isFullscreen ? "fit-content" : "auto"} !important;
      }
    `;
    const existingStyle = document.getElementById("fullscreen-style");
    if (existingStyle) {
      existingStyle.remove();
    }
    document.head.appendChild(style);

    if (!isFullscreen) {
      const writeButton = document.querySelector(".carta-toolbar-left button");
      if (writeButton && writeButton instanceof HTMLElement) {
        writeButton.click();
      }
    }
  }
</script>

<IconButton
  className="fullscreen-toggle"
  title="Fullscreen Toggle"
  onClick={toggleFullscreen}>
  {#if isFullscreen}
    <Minimize />
  {:else}
    <Maximize />
  {/if}
</IconButton>
