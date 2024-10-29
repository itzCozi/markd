<script lang="ts">
  import localStorageStore from "../stores/localStorage";

  $: source = localStorageStore.get("markdown") || "";
  $: words = source.split(/\s+/).filter((word) => word !== "");
  $: wordCount = words.length;
  $: characterCount = source.length;
  $: readTime = Math.ceil(wordCount / 200);
</script>

<div class="stats bg-mono-card gap-3 text-type-dimmed text-xs md:ring-1 ring-black ring-opacity-15">
  <span class="stat-item">Characters: {characterCount}</span>
  <span class="separator">•</span>
  <span class="stat-item">Words: {wordCount}</span>
  <span class="separator">•</span>
  <span class="stat-item">Read time: {readTime} {readTime === 1 ? "minute" : "minutes"}</span>
</div>
