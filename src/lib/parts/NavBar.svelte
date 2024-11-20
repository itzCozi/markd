<script lang="ts">
  import DropdownContainer from "$lib/components/layout/DropdownContainer.svelte";
  import FullscreenToggle from "$lib/components/buttons/FullscreenToggle.svelte";
  import TextButton from "$lib/components/buttons/TextButton.svelte";
  import IconButton from "$lib/components/buttons/IconButton.svelte";
  import HtmlButton from "$lib/components/buttons/HTMLButton.svelte";
  import PdfButton from "$lib/components/buttons/PDFButton.svelte";
  import MdButton from "$lib/components/buttons/MdButton.svelte";
  import { Menu, FileText, CircleHelp } from "lucide-svelte";
  import Sidebar from "$lib/parts/Sidebar.svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

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
    <TextButton
      onClick={() => goto("/")}
      title="Home">
      <div class="flex flex-row gap-3 items-center">
        <img
          src="/favicon.svg"
          alt="logo"
          title="Home"
          class="w-10 h-10" />
        <h1 class="text-4xl font-semibold text-type-emphasized">MarkD</h1>
      </div>
    </TextButton>
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
          <DropdownContainer id="export-menu">
            <!-- From longest item to shortest -->
            <MdButton />
            <PdfButton />
            <HtmlButton />
          </DropdownContainer>
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
