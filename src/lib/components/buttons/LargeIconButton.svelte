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
  class={`text-sm text-type-primary/85 block py-2 px-3 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-100 rounded-md ease-in-out ${className}`}
  onclick={onClick}
  {title}>
  {@render children?.()}
</button>
