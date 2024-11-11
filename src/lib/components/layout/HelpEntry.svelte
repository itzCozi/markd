<script lang="ts">
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  interface Props {
    title: string;
    description: string;
    example?: string | null | undefined;
    children?: import("svelte").Snippet;
  }

  let { title, description, example = null, children }: Props = $props();
</script>

<div class="my-4">
  <h3 class="text-2xl my-2 text-type-emphasized">{title}</h3>
  <Paragraph>{description}</Paragraph>
  {#if example}
    <pre class="bg-mono-card p-3 my-1 rounded-sm text-wrap whitespace-pre-line overflow-auto">
      <code>{example}</code>
    </pre>
  {/if}
  {@render children?.()}
</div>
