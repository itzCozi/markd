<script lang="ts">
  import LargeIconButton from "$lib/components/buttons/LargeIconButton.svelte";
  import SmallIconButton from "$lib/components/buttons/SmallIconButton.svelte";
  import SidebarButton from "$lib/components/buttons/SidebarButton.svelte";
  import { XIcon } from "lucide-svelte";
  import { goto } from "$app/navigation";
  import { Github, Mail } from "lucide-svelte";
  export let isSidebarOpen = false;
  export let closeSidebar;
</script>

<div
  class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200 cursor-default"
  class:opacity-0="{!isSidebarOpen}"
  class:pointer-events-none="{!isSidebarOpen}"
  role="button"
  tabindex="0"
  on:click="{closeSidebar}"
  on:keydown="{(e) => e.key === 'Enter' && closeSidebar()}">
</div>

<aside
  class="fixed top-0 left-0 w-full md:w-64 flex flex-col h-full bg-mono-card z-50 transform transition-transform duration-200"
  class:translate-x-0="{isSidebarOpen}"
  class:-translate-x-full="{!isSidebarOpen}">
  <div class="p-4">
    <div class="flex justify-between mt-1 mb-5">
      <p class="text-2xl font-semibold text-type-emphasized">Navigation</p>
      <SmallIconButton
        title="Close"
        onClick="{closeSidebar}">
        <XIcon />
      </SmallIconButton>
    </div>
    <div class="flex flex-col gap-3">
      <SidebarButton
        title="Home"
        onClick="{() => {
          closeSidebar();
          goto('/');
        }}">Home</SidebarButton>
      <SidebarButton
        title="About"
        onClick="{() => {
          closeSidebar();
          goto('/about');
        }}">About</SidebarButton>
      <SidebarButton
        title="help"
        onClick="{() => {
          closeSidebar();
          goto('/help');
        }}">Docs</SidebarButton>
    </div>
  </div>
  <div class="sidebar-icon-buttons mt-auto mb-2 px-4 flex justify-between">
    <LargeIconButton
      title="GitHub"
      onClick="{() => {
        closeSidebar();
        window.location.href = 'https://github.com/itzcozi/markd';
      }}">
      <Github />
    </LargeIconButton>
    <LargeIconButton
      title="Email"
      onClick="{() => {
        closeSidebar();
        open('mailto:dev@wyzie.ru', '_blank');
      }}">
      <Mail />
    </LargeIconButton>
  </div>
</aside>
