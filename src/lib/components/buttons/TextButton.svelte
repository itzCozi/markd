<script lang="ts">
  interface Props {
    className?: string | undefined;
    onClick?: any;
    title?: string;
    children?: import("svelte").Snippet;
  }

  let { className = "", onClick = () => {}, title = "", children }: Props = $props();
</script>

<button
  class={`text-type-primary/85 hover:underline ${className}`}
  onclick={onClick}
  {title}>
  {@render children?.()}
</button>
