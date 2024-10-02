<script lang="ts">
  import { setContext } from "svelte";
  import { Carta, Markdown } from 'carta-md';
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

  let numberOfLines = source.split('\n').length;

  function handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value;
    source = value;
    localStorageStore.set('markdown', value);
    KeyUp(event);
  }

  const KeyUp = (event: Event) => {
    const textarea = event.target as HTMLInputElement;
    numberOfLines = textarea.value.split('\n').length;
  };

  const KeyDown = (event: Event) => {
    const textarea = event.target as HTMLInputElement;

    if ((event as KeyboardEvent).key === 'Tab') {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      if (start && end) {
        textarea.value = textarea.value.substring(0, start) + '\t'
        + textarea.value.substring(end);
        event.preventDefault();
      }
    }
  };

  const carta = new Carta({
    sanitizer: DOMPurify.sanitize
  });
</script>

<div class="flex h-screen bg-mono-background">
  <div style="width: {leftWidth}%;">
    <div class="flex h-full overflow-hidden">
      <div class="p-2 text-gray-600 text-right border-r border-[#252525] w-12 line-numbers">
        {#each Array(numberOfLines) as _}
                <span class="new-line" />
        {/each}
      </div>
      <textarea
        class="text-content w-full p-2 border-none outline-none resize-none bg-mono-background font-mono overflow-y-auto"
        value={source}
        on:input={handleInput}
        on:keydown={KeyDown}
        placeholder="Input markdown here..."></textarea>
    </div>
  </div>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="w-1 cursor-ew-resize bg-[#202020]"
    style="left: calc({leftWidth}% - 5px);"
    on:mousedown={handleMouseDown}>
  </div>

  <div class="p-2 overflow-auto markdown-content" style="width: {100 - leftWidth}%;">
    {#key source}
	    <Markdown {carta} value={source} />
    {/key}
  </div>
</div>
