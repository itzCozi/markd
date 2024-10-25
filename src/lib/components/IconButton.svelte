<script lang="ts">
  export let className = "";
  export let onClick = () => {};
  export let title = "";
</script>

<button
  class="{`text-type-primary block p-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 duration-200 rounded ease-in-out ${className}`}"
  on:click="{onClick}"
  {title}>
  <slot></slot>
</button>
