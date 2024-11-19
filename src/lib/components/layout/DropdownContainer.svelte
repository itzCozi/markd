<script lang="ts">
  export let width = "w-48";
  export let height = "";
  export let position = "right-0";
  export let id: string;
</script>

<div
  class="origin-top-right z-40 absolute {position} mt-2 {height} {width} rounded-md bg-mono-background border border-mono-divider overflow-auto"
  role="menu"
  aria-orientation="vertical"
  aria-labelledby="{id}-button"
  tabindex="-1">
  <slot></slot>
</div>
