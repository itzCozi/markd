<script lang="ts">
  interface Props {
    className?: string | undefined;
    file?: string | undefined;
    onClick?: any;
    title?: string;
    children?: import("svelte").Snippet;
  }

  let { className = "", file = "", onClick = () => {}, title = "", children }: Props = $props();
</script>

<button
  class={`block w-full px-3 py-2 text-left text-sm text-type-primary hover:bg-mono-accentDark duration-100 ease-in-out border-b border-mono-divider last:border-b-0 ${className}`}
  onclick={onClick}
  {title}>
  <div class="flex justify-between items-center">
    {@render children?.()}
    <span class="text-type-dimmed">
      {#if file}
        {file.toUpperCase()}
      {/if}
    </span>
  </div>
</button>
