<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { Menu, FileText, CircleHelp } from "lucide-svelte";
  import IconButton from "$lib/components/buttons/IconButton.svelte";
  import Sidebar from "$lib/parts/Sidebar.svelte";
  import PdfButton from "$lib/components/buttons/PDFButton.svelte";
  import HtmlButton from "$lib/components/buttons/HTMLButton.svelte";
  import FullscreenToggle from "$lib/components/buttons/FullscreenToggle.svelte";
  import MdButton from "$lib/components/buttons/MdButton.svelte";
  import ThemeToggle from "$lib/components/buttons/ThemeToggle.svelte";

  let isSidebarOpen = $state(false);
  let exportMenuOpen = $state(false);
  let preventClose = false;

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function closeSidebar() {
    isSidebarOpen = false;
  }

  function closeExportMenu(event: MouseEvent) {
    const exportMenu = document.querySelector(".export-menu");
    if (
      exportMenu &&
      !exportMenu.contains(event.target as Node) &&
      event.target !== document.querySelector('button[title="Export"]') &&
      !preventClose
    ) {
      exportMenuOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", closeExportMenu);
  });
</script>

<header class="navbar w-full p-4 bg-mono-card z-20">
  <nav class="flex justify-between items-center">
    <button
      onclick={() => goto("/")}
      title="Home"
      class="hover:no-underline">
      <div class="flex flex-row gap-3 items-center">
        <img
          src="/favicon.svg"
          alt="logo"
          title="Home"
          class="w-10 h-10" />
        <h1 class="text-4xl font-semibold text-type-emphasized">MarkD</h1>
      </div>
    </button>
    <div class="flex flex-row gap-3 items-center">
      {#if $page.url.pathname === "/"}
        <IconButton
          title="Help"
          onClick={() => goto("/help")}>
          <CircleHelp />
        </IconButton>
      {/if}
      <div class="relative inline-block text-left">
        {#if $page.url.pathname === "/"}
          <IconButton
            className="export-menu"
            title="Export"
            onClick={() => {
              exportMenuOpen = !exportMenuOpen;
            }}>
            <FileText />
          </IconButton>
        {/if}
        {#if exportMenuOpen}
          <div
            class="origin-top-right z-40 absolute right-0 mt-2 w-48 rounded-md bg-mono-background border border-mono-divider"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1">
            <!-- From longest item to shortest -->
            <MdButton />
            <PdfButton />
            <HtmlButton />
          </div>
        {/if}
      </div>
      {#if $page.url.pathname === "/"}
        <FullscreenToggle />
      {/if}
      <IconButton
        title="Navigation"
        onClick={toggleSidebar}>
        <Menu />
      </IconButton>
    </div>
  </nav>
</header>

<Sidebar
  {isSidebarOpen}
  {closeSidebar} />
