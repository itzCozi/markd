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
  class={`text-type-primary/85 border border-type-footer rounded p-1 hover:text-type-primary transition-colors duration-200 ${className}`}
  onclick={onClick}
  {title}>
  {@render children?.()}
</button>
