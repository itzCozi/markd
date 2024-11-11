<script lang="ts">
  interface Props {
    className?: string | undefined;
    children?: import("svelte").Snippet;
  }

  let { className = "", children }: Props = $props();
</script>

<hr class={`border-b border-mono-divider my-3 border-0 ${className}`} />
{@render children?.()}
