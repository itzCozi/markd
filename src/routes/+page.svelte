<script lang="ts">
  import "../styles.css"; // HTML renderer styles
  import { setContext } from "svelte";
  import { Carta, Markdown, MarkdownEditor } from "carta-md";
  import localStorageStore from "../lib/stores/localStorage";
  import DOMPurify from "isomorphic-dompurify";

  let leftWidth = 50;
  let isResizing = false;
  let selectedTab: "write" | "preview" = "write";
  let editorScrollTop = 0;
  let rendererScrollTop = 0;
  let isScrollSyncEnabled = true; // Variable to toggle scroll sync

  function handleEditorScroll(event: Event) {
    if (!isScrollSyncEnabled) return; // Only sync if enabled
    const editor = event.target as HTMLDivElement;
    editorScrollTop = editor.scrollTop;
    rendererScrollTop = editorScrollTop;

    const renderer = document.querySelector('.renderer') as HTMLDivElement;
    if (renderer) {
      renderer.scrollTop = rendererScrollTop; // Only scroll if renderer exists
    }
  }

  function handleRendererScroll(event: Event) {
    if (!isScrollSyncEnabled) return; // Only sync if enabled
    const renderer = event.target as HTMLDivElement;
    rendererScrollTop = renderer.scrollTop;
    editorScrollTop = rendererScrollTop;

    const editor = document.querySelector('.editor .w-full') as HTMLDivElement;
    if (editor) {
      editor.scrollTop = editorScrollTop; // Only scroll if editor exists
    }
  }

  function handleMouseDown() {
    isResizing = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (isResizing) {
      const totalWidth = document.body.clientWidth;
      leftWidth = (event.clientX / totalWidth) * 100;
    }
  }

  function handleMouseUp() {
    isResizing = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  function toggleScrollSync() {
    isScrollSyncEnabled = !isScrollSyncEnabled;
  }

  let source: string = localStorageStore.get("markdown") || "";
  setContext("source", source);

  $: {
    localStorageStore.set("markdown", source);
  }

  const carta = new Carta({
    sanitizer: DOMPurify.sanitize,
    theme: "github-dark",
  });
</script>

<div class="flex h-[100dvh] bg-mono-background">
  <div class="editor" style="width: {leftWidth}%;">
    <div class="flex h-full overflow-hidden">
      <div
        class="line-count p-2 text-gray-600 text-right border-r border-[#252525] w-12 {selectedTab ===
        'write'
          ? ''
          : 'hidden'}">
      </div>
      <div
        class="w-full p-2 border-none outline-none resize-none bg-mono-background font-mono overflow-y-auto"
        on:scroll={handleEditorScroll}>
        <MarkdownEditor
          {carta}
          bind:value={source}
          bind:selectedTab
          mode="tabs"
          placeholder="Insert your markdown here..." />
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="divider w-1 cursor-ew-resize bg-[#202020]"
    style="left: calc({leftWidth}% - 5px);"
    on:mousedown={handleMouseDown}>
  </div>

  <div class="renderer p-2 overflow-auto markdown-content" style="width: {100 - leftWidth}%" on:scroll={handleRendererScroll}>
    {#key source}
      <Markdown {carta} value={source} />
    {/key}
  </div>
</div>

<!-- Toggle Button for Scroll Sync -->
<div class="sync-button">
  <button on:click={toggleScrollSync} class="px-4 py-2 bg-gray-600 text-white rounded">
    {isScrollSyncEnabled ? 'Un-Sync' : 'Sync'}
  </button>
</div>