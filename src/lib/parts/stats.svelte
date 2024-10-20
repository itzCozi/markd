<script lang="ts">
  import localStorageStore from "../../lib/stores/localStorage";

  $: source = localStorageStore.get("markdown") || "";
  $: words = source.split(/\s+/).filter(word => word !== "");
  $: wordCount = words.length;
  $: characterCount = source.length;
  $: readTime = Math.ceil(wordCount / 200);
</script>

<div class="stats bg-mono-card py-1 px-3 gap-2 text-type-dimmed text-xs ml-auto">
  <span>Characters: {characterCount}</span>
  <span>|</span>
  <span>Words: {wordCount}</span>
  <span>|</span>
  <span>Read Time: {readTime} minutes</span>
</div>
