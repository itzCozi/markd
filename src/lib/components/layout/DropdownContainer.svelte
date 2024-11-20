<script lang="ts">
  interface Props {
    position?: string;
    height?: string;
    width?: string;
    id?: string;
    children?: import("svelte").Snippet;
  }

  let { position = "right-0", height = "", width = "w-48", id, children }: Props = $props();
</script>

<div
  class="origin-top-right z-40 absolute {position} mt-2 {height} {width} rounded-md bg-mono-background border border-mono-divider overflow-auto"
  role="menu"
  aria-orientation="vertical"
  aria-labelledby="{id}-button"
  tabindex="-1">
  {@render children?.()}
</div>
