<script lang="ts">
  export let className = "";
  export let onClick = () => {};
  export let title = "";
</script>

<button
  class="{`block w-full px-4 py-2 text-left text-sm text-type-primary hover:bg-mono-accentLight2 duration-100 ease-in-out ${className}`}"
  on:click="{onClick}"
  {title}>
  <slot />
</button>
