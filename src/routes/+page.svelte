<script lang="ts">
  import { setContext } from "svelte";
  import SvelteMarkdown from "svelte-markdown";

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

  let lines: number[] = [1];
  let source: string = "";
  setContext("source", source);

  function updateLineNumbers(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value;
    const numberOfLines = value.split("\n").length;
    lines = Array.from({ length: numberOfLines }, (_, i) => i + 1);
  }

  function syncScroll(event: Event) {
    const target = event.target as HTMLElement;
    const lineNumbers = document.querySelector(".line-numbers") as HTMLElement;
    lineNumbers.scrollTop = target.scrollTop;
  }
</script>

<div class="flex h-screen bg-mono-background">
  <div style="width: {leftWidth}%;">
    <div class="flex h-full overflow-hidden">
      <div class="p-2 text-gray-600 text-right border-r border-[#252525] w-12 line-numbers">
        {#each lines as line}
          <div>{line}</div>
        {/each}
      </div>
      <textarea
        class="w-full p-2 border-none outline-none resize-none bg-mono-background font-mono overflow-y-auto"
        bind:value={source}
        on:input={updateLineNumbers}
        placeholder="Input markdown here..."
        on:scroll={syncScroll}></textarea>
    </div>
  </div>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="w-1 cursor-ew-resize bg-[#202020]"
    style="left: calc({leftWidth}% - 5px);"
    on:mousedown={handleMouseDown}>
  </div>

  <!--
    Add a &% symbol or something of the sort to add a br into the html output 
    https://www.npmjs.com/package/svelte-markdown#renderers
  -->
  <div class="p-2 overflow-auto markdown-content" style="width: {100 - leftWidth}%;">
    <SvelteMarkdown {source} />
  </div>
</div>
