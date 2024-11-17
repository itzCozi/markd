<script lang="ts">
  import IconButton from "$lib/components/buttons/IconButton.svelte";
  import TextButton from "$lib/components/buttons/TextButton.svelte";
  import PageLayout from "$lib/components/layout/PageLayout.svelte";
  import Paragraph from "$lib/components/type/Paragraph.svelte";
</script>

<PageLayout>
  <h2 class="text-3xl font-semibold text-type-emphasized">About Us</h2>
  <Paragraph className="mt-2">
    MarkD is an advanced live markdown editor directly in your browser. It's built using SvelteKit
    and supports HTML as well as an extended markdown syntax, all in the same file. MarkD is an open
    source project and a very opinionated one at that. All of the styles are inline tailwind css
    classes, and the markdown editor is built on Carta. Fully hosted on Cloudflare Pages for the
    community!
  </Paragraph>
  <div class="flex justify-center my-3">
    <TextButton
      onClick={() => open("https://github.com/itzcozi/markd", "_blank")}
      title="Source code"
      className="w-full flex justify-center items-center">
      <img
        src="https://github-readme-stats.vercel.app/api/pin/?username=itzcozi&repo=markd&theme=dark&show_owner=true&title_color=d0d0d0&text_color=a3a3a3&icon_color=4493f8&bg_color=151515&border_color=505050"
        alt="Github repository"
        title="Source code" />
    </TextButton>
  </div>
  <div class="flex flex-row gap-3 items-center my-2">
    <IconButton
      title="Email"
      onClick={() => window.open("mailto:dev@wyzie.ru")}
      className="w-full py-2 rounded-md">
      Email Us
    </IconButton>
  </div>
</PageLayout>
