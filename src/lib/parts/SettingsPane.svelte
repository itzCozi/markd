<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  import { XIcon } from "lucide-svelte";
  import SmallIconButton from "$lib/components/buttons/SmallIconButton.svelte";
  import ThemeToggle from "$lib/components/buttons/ThemeToggle.svelte";
  const dispatch = createEventDispatcher();

  function closePane() {
    dispatch("close");
  }
</script>

<div class="bg-mono-accent rounded-md p-5 mx-2 w-[100dvh] h-fit max-h-[120dvh] space-y-6">
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-semibold text-type-primary">Settings</h2>
    <SmallIconButton
      title="Close"
      onClick={closePane}>
      <XIcon />
    </SmallIconButton>
  </div>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <Paragraph className="text-type-primary">Toggle theme</Paragraph>
      <ThemeToggle />
    </div>
  </div>
</div>
