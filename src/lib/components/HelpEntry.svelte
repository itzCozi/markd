<script lang="ts">
  export let title: string;
  export let description: string;
  export let example: string | null | undefined = null;
</script>

<div class="my-4">
  <p class="text-2xl my-2 text-type-emphasized">{title}</p>
  <p class="text-type-dimmed">{description}</p>
  {#if example}
    <pre class="bg-mono-card p-3 my-1 rounded-sm text-wrap whitespace-pre-line">
      <code>{example}</code>
    </pre>
  {/if}
  <slot></slot>
</div>
