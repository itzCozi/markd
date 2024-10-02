<script>
  import { Copy } from "lucide-svelte";

  export let text = "";

  function copyToClipboard() {
    navigator.clipboard.writeText(text).catch((err) => {
      alert("Failed to copy: ");
    });
  }
</script>

<div class="flex justify-between bg-mono-card rounded-sm p-2">
  <pre><code class="whitespace-pre-wrap break-words">{@html text}</code></pre>
  <button on:click={copyToClipboard} class="ml-2 h-full hover:scale-105 duration-50">
    <Copy />
  </button>
</div>
