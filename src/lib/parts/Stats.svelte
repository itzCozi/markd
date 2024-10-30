<script lang="ts">
  import localStorageStore from "$lib/stores/localStorage";

  $: source = localStorageStore.get("markdown") || "";
  $: words = source.split(/\s+/).filter((word) => word !== "");
  $: wordCount = words.length;
  $: characterCount = source.length;
  $: readTime = Math.ceil(wordCount / 200);
</script>

<div class="stats gap-4 text-type-dimmed text-xs">
  <span class="stat-item">Characters: {characterCount}</span>
  <span class="separator">•</span>
  <span class="stat-item">Words: {wordCount}</span>
  <span class="separator">•</span>
  <span class="stat-item">Length: {readTime} {readTime === 1 ? "minute" : "minutes"}</span>
</div>
