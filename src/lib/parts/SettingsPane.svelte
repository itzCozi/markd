<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { XIcon } from "lucide-svelte";
  import SmallIconButton from "$lib/components/buttons/SmallIconButton.svelte";
  import ThemeToggle from "$lib/components/buttons/ThemeToggle.svelte";

  const dispatch = createEventDispatcher();

  function closePane() {
    dispatch("close");
  }
</script>

<div
  class="bg-mono-card shadow-lg rounded-lg p-8 w-[70dvh] h-fit max-h-[70dvh] mt-10 space-y-6 mx-4">
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-semibold text-type-primary">Settings</h2>
    <SmallIconButton
      title="Close Settings"
      onClick={closePane}>
      <XIcon class="w-8 h-8" />
    </SmallIconButton>
  </div>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <paragraph class="text-type-primary">Toggle Theme</paragraph>
      <ThemeToggle />
    </div>
  </div>
</div>
