<script lang="ts">
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  import ThemeToggle from "$lib/components/buttons/ThemeToggle.svelte";
</script>

<div class="w-full h-full">
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <Paragraph className="text-type-primary">Toggle theme</Paragraph>
      <ThemeToggle />
    </div>
    <!-- Add editorTheme here to change the "dark-pro" shiki theme -->
  </div>
</div>
