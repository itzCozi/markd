<script lang="ts">
  import NavBar from "$lib/parts/NavBar.svelte";
  import Divider from "$lib/components/type/Divider.svelte";
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="sticky top-0">
  <NavBar />
</div>

<div
  class="py-6 mx-2 bg-mono-background flex flex-wrap justify-center items-center overflow-hidden">
  <div class="w-[97%] p-5 bg-mono-accent max-w-4xl rounded-md">
    {@render children?.()}

    <Divider />
    <Paragraph className="text-xs">
      Created by <a
        href="https://github.com/itzcozi"
        title="BadDeveloper's github">BadDeveloper</a>
      and
      <a
        href="https://github.com/Pasithea0"
        title="Pas's github">Pasithea</a> with 💙
    </Paragraph>
  </div>
</div>
