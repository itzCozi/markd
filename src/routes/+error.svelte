<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="flex flex-col m-3">
  <h1 class="font-bold">
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

  <a
    class="mt-2"
    href="/"
    title="Back home">Back</a>
</div>
