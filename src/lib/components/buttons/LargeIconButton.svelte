<script lang="ts">
  export let className: string | undefined = "";
  export let onClick = () => {};
  export let title = "";
</script>

<button
  class="{`text-sm text-type-primary/85 block py-2 px-3 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-100 rounded-md ease-in-out ${className}`}"
  on:click="{onClick}"
  {title}>
  <slot />
</button>
