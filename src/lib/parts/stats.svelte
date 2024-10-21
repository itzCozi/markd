<script lang="ts">
  import localStorageStore from "../../lib/stores/localStorage";

  $: source = localStorageStore.get("markdown") || "";
  $: words = source.split(/\s+/).filter((word) => word !== "");
  $: wordCount = words.length;
  $: characterCount = source.length;
  $: readTime = Math.ceil(wordCount / 200);
</script>

<div class="stats bg-mono-card py-1 px-2 m-1 gap-3 text-type-dimmed text-xs">
  <span class="stat-item">Characters: {characterCount}</span>
  <span class="separator">•</span>
  <span class="stat-item">Words: {wordCount}</span>
  <span class="separator">•</span>
  <span class="stat-item">Read Time: {readTime} minutes</span>
</div>
