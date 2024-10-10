<script lang="ts">
  import { XIcon } from "lucide-svelte";
  import { goto } from "$app/navigation";
  import { Github, Mail } from "lucide-svelte";
  export let isSidebarOpen = false;
  export let closeSidebar;
</script>

<div
  class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200"
  class:opacity-0="{!isSidebarOpen}"
  class:pointer-events-none="{!isSidebarOpen}"
  role="button"
  tabindex="0"
  on:click="{closeSidebar}"
  on:keydown="{(e) => e.key === 'Enter' && closeSidebar()}">
</div>

<aside
  class="fixed top-0 left-0 w-full md:w-64 flex flex-col h-full bg-mono-card shadow-lg z-50 transform transition-transform duration-200"
  class:translate-x-0="{isSidebarOpen}"
  class:-translate-x-full="{!isSidebarOpen}">
  <div class="p-4">
    <div class="flex justify-between mt-1 mb-5">
      <p class="text-2xl font-semibold">Navigation</p>
      <button
        title="Close"
        on:click="{closeSidebar}"
        class="bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-100 px-1 rounded">
        <XIcon />
      </button>
    </div>
    <div class="flex flex-col gap-3">
      <button
        title="Home"
        class="text-left py-2 px-3 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-150 rounded-md"
        on:click="{() => {
          closeSidebar();
          goto('/');
        }}">Home</button>
      <button
        title="About"
        class="text-left py-2 px-3 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-150 rounded-md"
        on:click="{() => {
          closeSidebar();
          goto('/about');
        }}">About</button>
      <button
        title="Usage"
        class="text-left py-2 px-3 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-150 rounded-md"
        on:click="{() => {
          closeSidebar();
          goto('/usage');
        }}">Usage</button>
    </div>
  </div>
  <div class="mt-auto mb-2 px-4 flex justify-between">
    <button
      title="GitHub"
      class="text-left py-2 px-3 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-150 rounded-md"
      on:click="{() => {
        closeSidebar();
        window.location.href = 'https://github.com/itzcozi/markd';
      }}">
      <Github />
    </button>
    <button
      title="Email"
      class="text-left py-2 px-3 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-150 rounded-md"
      on:click="{() => {
        closeSidebar();
        open('mailto:dev@wyzie.ru', '_blank');
      }}">
      <Mail />
    </button>
  </div>
</aside>
