<script lang="ts">
  import "../global.css";
  import { getContext } from "svelte";
  const source = getContext("source") as string;
</script>
<slot />
