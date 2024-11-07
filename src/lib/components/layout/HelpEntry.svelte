<script lang="ts">
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  export let title: string;
  export let description: string;
  export let example: string | null | undefined = null;
</script>

<div class="my-4">
  <h3 class="text-2xl my-2 text-type-emphasized">{title}</h3>
  <Paragraph>{description}</Paragraph>
  {#if example}
    <pre class="bg-mono-card p-3 my-1 rounded-sm text-wrap whitespace-pre-line overflow-auto">
      <code>{example}</code>
    </pre>
  {/if}
  <slot />
</div>
