<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
</script>

<div class="flex flex-col gap-8 m-3">
  <h1 class="font-semibold">
    <span class="text-red-600">{$page.status}</span>
    -
    {$page.error?.message}
  </h1>

  <a href="/">Home</a>
</div>
