<script lang="ts">
  interface Props {
    className?: string | undefined;
    children?: import("svelte").Snippet;
  }

  let { className = "", children }: Props = $props();
</script>

<p class={`text-type-dimmed ${className}`}>
  {@render children?.()}
</p>
