<script lang="ts">
  import "@/global.css";
  import NavBar from "$lib/NavBar.svelte";
  import { getContext } from "svelte";
  const source = getContext("source") as string;
</script>

<NavBar {source} />

<slot />