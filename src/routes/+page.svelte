<script lang="ts">
  import { setContext } from "svelte";
  import { Carta, Markdown, MarkdownEditor } from 'carta-md';
  import localStorageStore from '../lib/stores/localStorage';
  import DOMPurify from 'isomorphic-dompurify';

  let leftWidth = 50;
  let isResizing = false;

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

  let source: string = localStorageStore.get('markdown') || '';
  setContext("source", source);

  $: {
    localStorageStore.set('markdown', source);
  }

  const carta = new Carta({
    sanitizer: DOMPurify.sanitize,
    theme: 'github-dark'
  });

</script>

<div class="flex h-screen bg-mono-background">
  <div class="editor" style="width: {leftWidth}%;">
    <div class="flex h-full overflow-hidden">
      <div class="p-2 text-gray-600 text-right border-r border-[#252525] w-12">
      </div>
      <div class="w-full p-2 border-none outline-none resize-none bg-mono-background font-mono overflow-y-auto">     
        <MarkdownEditor {carta} bind:value={source} mode="tabs" selectedTab="write" scroll="sync" placeholder="Markdown here..." />
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="divider w-1 cursor-ew-resize bg-[#202020]"
    style="left: calc({leftWidth}% - 5px);"
    on:mousedown={handleMouseDown}>
  </div>

  <div class="renderer p-2 overflow-auto markdown-content" style="width: {100 - leftWidth}%;">
    {#key source}
	    <Markdown {carta} value={source}/>
    {/key}
  </div>
</div>
