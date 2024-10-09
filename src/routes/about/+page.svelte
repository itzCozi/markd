<script>

  import NavBar from "$lib/parts/NavBar.svelte";

</script>

<NavBar />

<div class="flex pt-8 bg-mono-background justify-center items-center">
  <div class="p-4 bg-mono-accent h-1/3 max-w-3xl rounded-md">
    <p class="text-3xl font-semibold">About Us</p>
    <p class="text-type-dimmed mt-2">
      MarkD is an advanced live markdown editor directly in your browser. It is built using
      SvelteKit and supports HTML as well as Markdown, all in the same file. MarkD is an open source
      project and a very opinionated one at that. All of the styles are inline tailwind css classes,
      and the Markdown editor uses Carta.
    </p>
    <a href="https://github.com/itzcozi/markd" title="Source code" class="mt-2 text-sm"
      >Source Code</a>
    <div class="flex flex-row gap-3 items-center my-2">
      <button
        title="Email"
        on:click={() => window.open("mailto:dev@wyzie,ru")}
        class="w-full py-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-100 px-1 rounded">
        Email Us
      </button>
    </div>
    <p class="text-xs mt-4">
      Created by <a href="https://github.com/itzcozi" title="BadDeveloper's github">BadDeveloper</a> and <a href="https://github.com/Pasithea0" title="Pas's github">Pasithea</a> with
      💙
    </p>
  </div>
</div>
