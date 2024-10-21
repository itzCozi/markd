<script>
  export let className = "";
  export let onClick = () => {};
  export let title = "";
</script>

<button
  class="{`text-sm text-type-primary block py-2 px-3 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-100 rounded-md ease-in-out ${className}`}"
  on:click="{onClick}"
  {title}>
  <slot></slot>
</button>
