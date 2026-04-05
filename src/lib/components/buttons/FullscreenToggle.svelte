<script lang="ts">
  import { Maximize, Minimize } from "lucide-svelte";
  import IconButton from "$lib/components/buttons/IconButton.svelte";

  let isFullscreen = $state(false);

  function toggleFullscreen() {
    isFullscreen = !isFullscreen;
    document.body.classList.toggle("fullscreen", isFullscreen);

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
