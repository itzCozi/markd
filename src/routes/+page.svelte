<script lang="ts">
  import '../global.css'; // Tailwind CSS
  import SvelteMarkdown from 'svelte-markdown';

  let leftWidth = 50; // Initial width percentage of the left div
  let isResizing = false;

  function handleMouseDown() {
    isResizing = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (isResizing) {
      const totalWidth = document.body.clientWidth;
      leftWidth = (event.clientX / totalWidth) * 100;
    }
  }

  function handleMouseUp() {
    isResizing = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  let lines: number[] = [1];
  let source: string = '';

  function updateLineNumbers(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value;
    const numberOfLines = value.split('\n').length;
    lines = Array.from({ length: numberOfLines }, (_, i) => i + 1);
  }
</script>

<nav class="w-full p-4 bg-mono-accent shadow-lg z-20">
  <div class="flex flex-row gap-3 items-center">
    <div>
      <img src="/favicon.svg" alt="logo" class="w-10 h-10" />
    </div>
    <div>
      <a href="/help">Help</a>
    </div>
  </div>
</nav>

<div class="flex h-screen bg-mono-background">
  <div class="border-r border-[#404040]" style="width: {leftWidth}%;">
    <div class="flex h-full">
      <div class="p-2 text-gray-600 text-right border-r border-[#252525] w-12">
        {#each lines as line}
          <div>{line}</div>
        {/each}
      </div>
      <textarea class="w-full p-2 border-none outline-none resize-none bg-mono-background font-mono" bind:value={source} on:input={updateLineNumbers} placeholder="Input markdown here..."></textarea>
    </div>
  </div>

  <div class="w-5 cursor-ew-resize" role="separator" on:mousedown={handleMouseDown}></div>

  <div class="p-2 overflow-auto" style="width: {100 - leftWidth}%;">
    <SvelteMarkdown {source} />
  </div>
</div>
