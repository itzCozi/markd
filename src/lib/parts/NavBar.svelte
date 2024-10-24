<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { Menu, FileText, CircleHelp } from "lucide-svelte";
  import IconButton from "$lib/components/IconButton.svelte";
  import Sidebar from "$lib/parts/Sidebar.svelte";
  import PdfButton from "$lib/components/buttons/PDFButton.svelte";
  import TxtButton from "$lib/components/buttons/TxtButton.svelte";
  import HtmlButton from "$lib/components/buttons/HTMLButton.svelte";
  import FullscreenToggle from "$lib/components/buttons/FullscreenToggle.svelte";
  import MdButton from "$lib/components/buttons/MdButton.svelte";

  let isSidebarOpen = false;
  let exportMenuOpen = false;

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function closeSidebar() {
    isSidebarOpen = false;
  }

  let preventClose = false;

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

<style>
  .scale-hover {
    transition: transform 0.15s;
  }
  .scale-hover:hover {
    transform: scale(1.03);
  }
</style>

<header class="navbar w-full p-4 bg-mono-card z-20">
  <nav class="flex justify-between items-center">
    <button
      on:click="{() => goto('/')}"
      title="Home"
      class="hover:no-underline">
      <div class="flex flex-row gap-3 items-center scale-hover duration-100">
        <img
          src="/favicon.svg"
          alt="logo"
          class="w-10 h-10" />
        <p class="text-4xl font-bold text-type-primary">MarkD</p>
      </div>
    </button>
    <div class="flex flex-row gap-3 items-center">
      <!-- https://flowbite-svelte.com/docs/components/dropdown -->
      <!-- Export dropdown menu -->
      {#if $page.url.pathname === "/"}
        <IconButton
          title="Help"
          onClick="{() => goto('/help')}">
          <CircleHelp />
        </IconButton>
      {/if}
      <div class="relative inline-block text-left">
        {#if $page.url.pathname === "/"}
          <IconButton
            className="export-menu"
            title="Export"
            onClick="{() => {
              exportMenuOpen = !exportMenuOpen;
            }}">
            <FileText />
          </IconButton>
        {/if}
        {#if exportMenuOpen}
          <div
            class="origin-top-right z-40 absolute right-0 mt-2 w-48 rounded-md shadow-xl py-1 bg-mono-card ring-1 ring-black ring-opacity-15"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1">
            <MdButton />
            <TxtButton />
            <PdfButton />
            <HtmlButton />
          </div>
        {/if}
      </div>
      {#if $page.url.pathname === "/"}
        <FullscreenToggle />
      {/if}
      <IconButton
        className=""
        title="Navigation"
        onClick="{toggleSidebar}">
        <Menu />
      </IconButton>
    </div>
  </nav>
</header>

<Sidebar
  {isSidebarOpen}
  {closeSidebar} />
