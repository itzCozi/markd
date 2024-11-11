<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { Undo2 } from "lucide-svelte";
  import IconButton from "$lib/components/buttons/IconButton.svelte";
</script>

<div class="flex flex-col m-3">
  <h1 class="font-semibold">
    <span class="text-red-600">{$page.status}</span>
    -
    {$page.error?.message}
  </h1>

  <pre>
<code>
Route: {$page.url.pathname}
Host: {$page.url.host}
</code>
  </pre>

  <IconButton
    onClick={() => goto("/")}
    className="bottom-0 fixed left-0 m-3 flex flex-row items-center gap-1"
    title="Back home">
    <Undo2 />
    Home
  </IconButton>
</div>
