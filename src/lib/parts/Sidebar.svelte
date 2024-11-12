<script lang="ts">
  import LargeIconButton from "$lib/components/buttons/LargeIconButton.svelte";
  import SmallIconButton from "$lib/components/buttons/SmallIconButton.svelte";
  import SidebarButton from "$lib/components/buttons/SidebarButton.svelte";
  import { XIcon, ChevronLeft } from "lucide-svelte";
  import { goto } from "$app/navigation";
  import { Github, Mail } from "lucide-svelte";
  import SettingsPane from "./SettingsPane.svelte";

  interface Props {
    isSidebarOpen?: boolean;
    closeSidebar: any;
  }

  let { isSidebarOpen = false, closeSidebar }: Props = $props();
  let showSettingsPane = $state(false);

  function toggleSettingsPane() {
    showSettingsPane = !showSettingsPane;
  }

  function backToSidebar() {
    showSettingsPane = false;
  }
</script>

<div
  class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200 cursor-default"
  class:opacity-0={!isSidebarOpen}
  class:pointer-events-none={!isSidebarOpen}
  role="button"
  tabindex="0"
  onclick={() => {
    backToSidebar();
    closeSidebar();
  }}
  onkeydown={(e) => e.key === "Enter" && closeSidebar()}>
</div>

<aside
  class="fixed top-0 left-0 w-full md:w-64 flex flex-col h-full bg-mono-card z-50 transform transition-transform duration-200"
  class:translate-x-0={isSidebarOpen}
  class:-translate-x-full={!isSidebarOpen}
  class:hidden={showSettingsPane}>
  <div class="p-4">
    <div class="flex items-center justify-between mt-1 mb-5">
      <h3 class="text-2xl font-semibold text-type-emphasized">Navigation</h3>
      <SmallIconButton
        title="Close"
        onClick={closeSidebar}>
        <XIcon />
      </SmallIconButton>
    </div>
    <div class="flex flex-col gap-3">
      <SidebarButton
        title="Home"
        onClick={() => {
          closeSidebar();
          goto("/");
        }}>Home</SidebarButton>
      <SidebarButton
        title="Settings"
        onClick={() => {
          toggleSettingsPane();
        }}>Settings</SidebarButton>
      <SidebarButton
        title="About"
        onClick={() => {
          closeSidebar();
          goto("/about");
        }}>About</SidebarButton>
      <SidebarButton
        title="Help"
        onClick={() => {
          closeSidebar();
          goto("/help");
        }}>Docs</SidebarButton>
    </div>
  </div>
  <div class="sidebar-icon-buttons mt-auto mb-2 px-4 flex justify-between">
    <LargeIconButton
      title="GitHub"
      onClick={() => {
        closeSidebar();
        window.location.href = "https://github.com/itzcozi/markd";
      }}>
      <Github />
    </LargeIconButton>
    <LargeIconButton
      title="Email"
      onClick={() => {
        closeSidebar();
        open("mailto:dev@wyzie.ru", "_blank");
      }}>
      <Mail />
    </LargeIconButton>
  </div>
</aside>

{#if showSettingsPane}
  <aside
    class="fixed top-0 left-0 w-full md:w-64 flex flex-col h-full bg-mono-card z-50 transform transition-transform duration-200"
    class:translate-x-0={isSidebarOpen && showSettingsPane}>
    <div class="p-4">
      <div class="flex items-center justify-between mt-1 mb-5">
        <h3 class="text-2xl font-semibold text-type-emphasized">Settings</h3>
        <SmallIconButton
          title="Back"
          onClick={backToSidebar}>
          <ChevronLeft />
        </SmallIconButton>
      </div>
      <SettingsPane on:close={() => backToSidebar()} />
    </div>
  </aside>
{/if}
