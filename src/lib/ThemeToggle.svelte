<script lang="ts">
  import { markdownTheme } from "./stores/themeStore";
  import { SunMoon} from "lucide-svelte";

  function toggleMarkdownTheme() {
    markdownTheme.update(theme => theme === "light" ? "" : "light");
  }
</script>

<button 
  class="text-left p-2 bg-mono-accentLight1 hover:bg-mono-accentLight2 rounded"
  title="Export"
  on:click={toggleMarkdownTheme}>
  <SunMoon />
</button>
