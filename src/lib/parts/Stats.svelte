<script lang="ts">
  import localStorageStore from "$lib/stores/localStorage";

  let source = $derived(localStorageStore.get("markdown") || "");
  let words = $derived(source.split(/\s+/).filter((word) => word !== ""));
  let wordCount = $derived(words.length);
  let characterCount = $derived(source.length);
  let readTime = $derived(Math.ceil(wordCount / 200));
</script>

<div class="stats gap-4 text-type-dimmed text-xs">
  <span class="stat-item">Characters: {characterCount}</span>
  <span class="separator">•</span>
  <span class="stat-item">Words: {wordCount}</span>
  <span class="separator">•</span>
  <span class="stat-item">Length: {readTime} {readTime === 1 ? "minute" : "minutes"}</span>
</div>
