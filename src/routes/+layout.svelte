<script type="ts">
  import "@/global.css";
  import NavBar from "$lib/NavBar.svelte";
  import { getContext } from "svelte";
  const source = getContext("source");
</script>

<NavBar {source} />

<slot />
