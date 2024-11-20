<script lang="ts">
  import { rendererTheme } from "$lib/stores/rendererThemeStore";
  import { Carta, Markdown, MarkdownEditor } from "carta-md";
  import { editorTheme } from "$lib/stores/editorThemeStore";
  import { placeholder } from "$lib/functions/placeholder";
  import localStorageStore from "$lib/stores/localStorage";
  import { markdownTheme } from "$lib/stores/themeStore";
  import NavBar from "$lib/parts/NavBar.svelte";
  import { Carta as CartaType } from "carta-md";
  import { Check, XIcon } from "lucide-svelte";
  import DOMPurify from "isomorphic-dompurify";
  import Stats from "$lib/parts/Stats.svelte";
  import { onMount } from "svelte";
  import "@/styles/styles.css"; // HTML renderer styles

  // Plugins:

  // Slash
  import { additionalSnippets } from "$lib/functions/slash";
  import { slash } from "@cartamd/plugin-slash";
  import "@/styles/slash.css";
  // Emoji
  import { emoji } from "@cartamd/plugin-emoji";
  import "@/styles/emoji.css";
  // External links forced
  import type { Plugin, UnifiedTransformer } from "carta-md";
  import rehypeExternalLinks from "rehype-external-links";

  const externalLinksTransformer: UnifiedTransformer<"sync"> = {
    execution: "sync",
    type: "rehype",
    transform: ({ processor }) => {
      processor.use(rehypeExternalLinks, {
        target: "_blank",
        rel: ["noopener", "noreferrer"],
      });
    },
  };

  const externalLinks = (): Plugin => ({
    transformers: [externalLinksTransformer],
  });
  // Admonitions
  import { defaultConfig } from "$lib/functions/admonitionsConfig";
  import plugin from "remark-github-beta-blockquote-admonitions";
  import "@/styles/admonitions.css";

  const admonitionsTransformer: UnifiedTransformer<"sync"> = {
    execution: "sync",
    type: "remark",
    transform: ({ processor }) => {
      processor.use(plugin, defaultConfig);
    },
  };

  const admonitions = (): Plugin => ({
    transformers: [admonitionsTransformer],
  });
  // Raw HTML
  import rehypeRaw from "rehype-raw";

  const rawhtml: Plugin = {
    transformers: [
      {
        execution: "sync",
        type: "rehype",
        transform({ processor }) {
          processor.use(rehypeRaw);
        },
      },
    ],
  };
  // Math
  import "katex/dist/katex.css";
  import { math } from "@cartamd/plugin-math";
  // Code
  import { code } from "@cartamd/plugin-code";
  // Subscript + Superscript
  import { subscript } from "carta-plugin-subscript";
  // End Plugins

  let leftWidth = $state(50);
  let isResizing = false;
  let selectedTab: "write" | "preview" = $state("write");
  let editorScrollTop = 0;
  let rendererScrollTop = 0;
  let isScrollSyncEnabled = $state(true);

  let carta: CartaType = $derived(
    new Carta({
      rehypeOptions: { allowDangerousHtml: true },
      sanitizer: DOMPurify.sanitize,
      // We should make this a store that changes based on the
      // markdownTheme and the settings
      theme: $editorTheme,
      extensions: [
        slash({
          snippets: additionalSnippets,
        }),
        emoji(),
        externalLinks(),
        admonitions(),
        math(),
        code({ theme: $rendererTheme }),
        rawhtml,
        subscript(),
      ],
      gfmOptions: {
        // remark-gfm that Carta uses convert single tilde to strikethrough, disable that to use single tilde for subscript.
        // see https://stackoverflow.com/a/78076200/7884074
        singleTilde: false,
      },
    }),
  );

  let source = $state("");

  onMount(() => {
    const cached = localStorageStore.get("markdown");
    if (cached) source = cached;
  });

  $effect(() => {
    localStorageStore.set("markdown", source);
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

  let pwa = false;

  function isPWA() {
    if (typeof window !== "undefined") {
      return window.matchMedia("(display-mode: standalone)").matches;
    }
    return false;
  }

  function managePWAStyles() {
    pwa = isPWA();
    const existingStyleTag = document.getElementById("pwa-style");

    if (pwa) {
      if (!existingStyleTag) {
        const style = document.createElement("style");
        style.id = "pwa-style";
        style.innerHTML = `
          @media (max-width: 768px) {
            .carta-icons-menu {
              margin-bottom: 30px !important;
            }
            .carta-toolbar {
              height: 70px !important;
              padding-right: 3px !important;
              padding-bottom: 18px !important;
            }
            .stats {
              bottom: 70px !important;
              border-block: 1px solid #333333 !important;
            }
          }
        `;
        document.head.appendChild(style);
      }
    } else if (existingStyleTag) {
      existingStyleTag.remove();
    }
  }

  onMount(() => {
    managePWAStyles();
  });
</script>

<NavBar />

{#key source}
  <Stats />
{/key}

<div
  class={`flex h-[calc(100dvh-72px)] ${$markdownTheme === "light" ? "bg-mono-lightBackground" : "bg-mono-background"}`}>
  <div
    class="editor"
    style="width: {leftWidth}%;">
    <div class="flex h-full overflow-hidden">
      <div
        class="line-count hidden p-2 text-gray-600 text-right border-r border-mono-accentDark w-12 {(
          selectedTab === 'write'
        ) ?
          ''
        : 'hidden'}">
      </div>
      <div
        class={`w-full p-2 border-none outline-none resize-none ${$markdownTheme === "light" ? "bg-mono-lightBackground" : "bg-mono-background"} font-mono overflow-y-auto`}
        onscroll={handleEditorScroll}>
        {#key $markdownTheme}
          <MarkdownEditor
            {carta}
            bind:value={source}
            bind:selectedTab
            theme={$markdownTheme}
            mode="tabs"
            {placeholder} />
        {/key}
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="divider w-1 h-full cursor-ew-resize bg-mono-card"
    style="left: calc({leftWidth}% - 5px);"
    onmousedown={handleMouseDown}>
  </div>

  <div
    class="renderer pb-[15px] p-2 overflow-auto markdown-content"
    style="width: {100 - leftWidth}%"
    onscroll={handleRendererScroll}>
    <div class="renderer-toolbar">
      <span class="mr-3 text-type-primary">Sync scroll</span>
      <label
        class="inline-flex items-center cursor-pointer"
        title="Theme Toggle">
        <input
          type="checkbox"
          bind:checked={isScrollSyncEnabled}
          class="hidden" />
        <span
          class={`relative inline-block w-8 h-5 transition duration-200 ease-in-out ${
            isScrollSyncEnabled ? "bg-mono-blueAccent" : "bg-mono-accentLight2"
          } rounded-full`}>
          <span
            class={`absolute top-1 left-1 inline-block w-3 h-3 rounded-full transition-transform duration-200 ease-in-out ${
              isScrollSyncEnabled ? "translate-x-3" : ""
            }`}>
            {#if isScrollSyncEnabled}
              <Check class="w-3 h-3 text-type-emphasized" />
            {:else}
              <XIcon class="w-3 h-3 text-type-emphasized" />
            {/if}
          </span>
        </span>
      </label>
    </div>
    {#key source + $markdownTheme}
      <Markdown
        {carta}
        value={source}
        theme={$markdownTheme} />
    {/key}
  </div>
</div>
