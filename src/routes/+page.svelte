<script lang="ts">
  import "../styles.css"; // HTML renderer styles
  import { setContext, onMount } from "svelte";
  import { Carta, Markdown, MarkdownEditor } from "carta-md";
  import { Carta as CartaType } from "carta-md";
  import localStorageStore from "../lib/stores/localStorage";
  import DOMPurify from "isomorphic-dompurify";
  import { markdownTheme } from "$lib/stores/themeStore";
  import NavBar from "$lib/parts/NavBar.svelte";

  // Plugins:
  import "../slash.css";
  import { slash } from "@cartamd/plugin-slash";

  let leftWidth = 50;
  let isResizing = false;
  let selectedTab: "write" | "preview" = "write";
  let editorScrollTop = 0;
  let rendererScrollTop = 0;
  let isScrollSyncEnabled = true;
  let carta: CartaType;
  let source = localStorageStore.get("markdown") || "";
  setContext("source", source);

  $: localStorageStore.set("markdown", source);

  $: carta = new Carta({
    sanitizer: DOMPurify.sanitize,
    theme: $markdownTheme === "light" ? "light-plus" : "dark-plus",
    extensions: [slash()]
  });

  function handleEditorScroll(event: Event) {
    if (!isScrollSyncEnabled) return;
    const editor = event.target as HTMLDivElement;
    editorScrollTop = editor.scrollTop;
    rendererScrollTop = editorScrollTop;

    const renderer = document.querySelector(".renderer") as HTMLDivElement;
    if (renderer) {
      renderer.scrollTop = rendererScrollTop;
    }
  }

  function handleRendererScroll(event: Event) {
    if (!isScrollSyncEnabled) return;
    const renderer = event.target as HTMLDivElement;
    rendererScrollTop = renderer.scrollTop;
    editorScrollTop = rendererScrollTop;

    const editor = document.querySelector(".editor .w-full") as HTMLDivElement;
    if (editor) {
      editor.scrollTop = editorScrollTop;
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
</script>

<NavBar />

<div
  class="{`flex h-[calc(100dvh-80px)] ${$markdownTheme === 'light' ? 'bg-white' : 'bg-mono-background'}`}">
  <div
    class="editor"
    style="width: {leftWidth}%;">
    <div class="flex h-full overflow-hidden">
      <div
        class="line-count p-2 text-gray-600 text-right border-r border-[#252525] w-12 {selectedTab ===
        'write'
          ? ''
          : 'hidden'}">
      </div>
      <div
        class="{`w-full p-2 border-none outline-none resize-none ${$markdownTheme === 'light' ? 'bg-white' : 'bg-mono-background'} font-mono overflow-y-auto`}"
        on:scroll="{handleEditorScroll}">
        {#key $markdownTheme}
          <MarkdownEditor
            {carta}
            bind:value="{source}"
            bind:selectedTab
            theme="{$markdownTheme}"
            mode="tabs"
            placeholder="Insert your markdown here..." />
        {/key}
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="divider w-1 cursor-ew-resize bg-[#202020]"
    style="left: calc({leftWidth}% - 5px);"
    on:mousedown="{handleMouseDown}">
  </div>

  <div
    class="{`renderer p-2 overflow-auto markdown-content ${$markdownTheme === 'light' ? 'bg-white' : ''}`}"
    style="width: {100 - leftWidth}%"
    on:scroll="{handleRendererScroll}">
    <div class="renderer-toolbar">
      <span class="mr-2 text-type-primary">Sync Scroll</span>
      <label class="inline-flex items-center">
        <input
          type="checkbox"
          bind:checked="{isScrollSyncEnabled}"
          class="hidden" />
        <span
          class="{`relative inline-block w-8 h-5 transition duration-200 ease-in-out ${isScrollSyncEnabled ? 'bg-[#2E6AAC]' : 'bg-gray-600'} rounded-full cursor-pointer`}">
          <span
            class="{`absolute top-1 left-1 inline-block w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out ${isScrollSyncEnabled ? 'translate-x-3' : ''}`}"
          ></span>
          <span
            class="{`absolute top-1 left-1 flex items-center justify-center w-3 h-3 transition-transform duration-200 ${isScrollSyncEnabled ? 'translate-x-3' : ''}`}">
            <i
              class="{`fas ${isScrollSyncEnabled ? 'fa-check' : 'fa-times'} ${isScrollSyncEnabled ? 'text-[#2E6AAC]' : 'text-type-primary'} text-[10px]`}"
            ></i>
          </span>
        </span>
      </label>
    </div>
    {#key source}
      <Markdown
        {carta}
        value="{source}"
        theme="{$markdownTheme}" />
    {/key}
  </div>
</div>
