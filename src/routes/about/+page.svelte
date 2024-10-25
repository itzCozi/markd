<script lang="ts">
  import NavBar from "$lib/parts/NavBar.svelte";
  import IconButton from "$lib/components/IconButton.svelte";
  import PageLayout from "$lib/components/PageLayout.svelte";
</script>

<PageLayout>
  <p class="text-3xl font-semibold">About Us</p>
  <p class="text-type-dimmed mt-2">
    MarkD is an advanced live markdown editor directly in your browser. It is built using SvelteKit
    and supports HTML as well as an extended Markdown syntax, all in the same file. MarkD is an open
    source project and a very opinionated one at that. All of the styles are inline tailwind css
    classes, and the Markdown editor uses Carta. All hosted on Cloudflare Pages!
  </p>
  <div class="flex justify-center my-3">
    <button
      on:click="{() => open('https://github.com/itzcozi/markd', '_blank')}"
      title="Source code"
      class="text-sm">
      <img
        src="https://github-readme-stats.vercel.app/api/pin/?username=itzcozi&repo=markd&theme=dark"
        alt="Github repository" />
    </button>
  </div>
  <div class="flex flex-row gap-3 items-center my-2">
    <IconButton
      title="Email"
      onClick="{() => window.open('mailto:dev@wyzie,ru')}"
      className="w-full py-2 rounded-md">
      Email Us
    </IconButton>
  </div>
</PageLayout>
