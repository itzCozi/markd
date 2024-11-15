<script lang="ts">
  import { createEventDispatcher } from "svelte";

  interface Props {
    className?: string | undefined;
    placeholder?: string | undefined;
    value?: string | undefined;
    children?: import("svelte").Snippet;
  }

  let { className = "", children, placeholder, value }: Props = $props();
  const dispatch = createEventDispatcher();
</script>

<input
  class={`text-type-primary block py-1 bg-mono-accentLight1 rounded-sm text-center caret-type-primary outline-none ${className}`}
  {placeholder}
  {value}
  oninput={(event) => dispatch("input", event)} />
{@render children?.()}
