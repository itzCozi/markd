<script>
  import NavBar from "$lib/parts/NavBar.svelte";
</script>

<div class="sticky top-0">
  <NavBar />
</div>

<div
  class="py-6 mx-2 bg-mono-background flex flex-wrap justify-center items-center overflow-hidden">
  <div class="w-[97%] p-5 bg-mono-accent max-w-2xl rounded-md">
    <slot />
  </div>
</div>
