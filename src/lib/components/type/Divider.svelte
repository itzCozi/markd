<script lang="ts">
  export let className: string | undefined = "";
</script>

<hr class="{`border-b border-mono-divider my-3 border-0 ${className}`}" />
<slot />
