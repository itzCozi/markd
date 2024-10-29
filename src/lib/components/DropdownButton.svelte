<script lang="ts">
  export let className: string | undefined = "";
  export let onClick = () => {};
  export let title = "";
</script>

<button
  class="{`block w-full px-4 py-2 text-left text-sm text-type-primary hover:bg-mono-accentDark duration-100 ease-in-out border-b border-[#333333] last:border-b-0 ${className}`}"
  on:click="{onClick}"
  {title}>
  <slot />
</button>
