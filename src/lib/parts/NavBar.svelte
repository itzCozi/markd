<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { Menu, FileText, CircleHelp } from "lucide-svelte";
  import Sidebar from "$lib/parts/Sidebar.svelte";
  import ThemeToggle from "$lib/buttons/ThemeToggle.svelte";
  import PdfButton from "../buttons/PDFButton.svelte";
  import TxtButton from "../buttons/TxtButton.svelte";
  import HtmlButton from "../buttons/HTMLButton.svelte";
  import FullscreenToggle from "../buttons/FullscreenToggle.svelte";

  let isSidebarOpen = false;
  let exportMenuOpen = false;

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function closeSidebar() {
    isSidebarOpen = false;
  }
</script>

<header class="navbar w-full p-4 bg-mono-card shadow-lg z-20">
  <nav class="flex justify-between items-center">
    <a
      href="/"
      title="Home"
      class="hover:no-underline">
      <div class="flex flex-row gap-3 items-center hover:scale-105 duration-100">
        <img
          src="/favicon.svg"
          alt="logo"
          class="w-10 h-10" />
        <p class="text-4xl font-bold text-type-primary">MarkD</p>
      </div>
    </a>
    <div class="flex flex-row gap-3 items-center">
      <!-- https://flowbite-svelte.com/docs/components/dropdown -->
      <!-- Export dropdown menu -->
      {#if $page.url.pathname === "/"}
        <button
          class="text-left p-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-200 rounded"
          title="How to"
          on:click="{() => goto('/usage')}">
          <CircleHelp />
        </button>
      {/if}
      <div class="relative inline-block text-left">
        {#if $page.url.pathname === "/"}
          <button
            class="text-left p-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-200 rounded"
            title="Export"
            on:click="{() => {
              exportMenuOpen = !exportMenuOpen;
            }}">
            <FileText />
          </button>
        {/if}
        {#if exportMenuOpen}
          <div
            class="origin-top-right z-40 absolute right-0 mt-2 w-48 rounded-md shadow-xl py-1 bg-mono-card ring-1 ring-black ring-opacity-15"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1">
            <TxtButton />
            <PdfButton />
            <HtmlButton />
          </div>
        {/if}
      </div>
      {#if $page.url.pathname === "/"}
        <FullscreenToggle />
        <ThemeToggle />
      {/if}
      <button
        class="text-left p-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-200 rounded"
        title="Navigation"
        on:click="{toggleSidebar}">
        <Menu />
      </button>
    </div>
  </nav>
</header>

<Sidebar
  {isSidebarOpen}
  {closeSidebar} />
