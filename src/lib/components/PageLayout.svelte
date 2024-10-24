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

    <hr class="border-b border-mono-accentLight2 py-2 border-0" />
    <p class="text-xs mt-3">
      Created by <a
        href="https://github.com/itzcozi"
        title="BadDeveloper's github">BadDeveloper</a>
      and
      <a
        href="https://github.com/Pasithea0"
        title="Pas's github">Pasithea</a> with 💙
    </p>
  </div>
</div>
