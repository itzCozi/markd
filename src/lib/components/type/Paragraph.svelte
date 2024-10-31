<script lang="ts">
  export let className: string | undefined = "";
</script>

<p class="{`text-type-dimmed ${className}`}">
  <slot />
</p>
