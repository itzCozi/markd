<script lang="ts">
  import Divider from "$lib/components/type/Divider.svelte";
  import NewLine from "$lib/components/type/NewLine.svelte";
</script>

<div class="flex items-center justify-center min-h-screen p-6">
  <div class="mx-auto flex flex-col gap-2 max-w-2xl">
    <h3 class="text-2xl text-type-emphasized mb-1">MIT License</h3>
    <p>
      Copyright (c) 2024 <a
        href="https://github.com/itzcozi"
        title="Github">Cooper Ransom</a>
      <NewLine />
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
      associated documentation files (the "Software"), to deal in the Software without restriction, including
      without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
      sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject
      to the following conditions:
      <NewLine />
      The above copyright notice and this permission notice shall be included in all copies or substantial
      portions of the Software.
      <NewLine />
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
      NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
      WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
      THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </p>
    <Divider />
    <div class="flex justify-between items-center">
      <a
        href="/"
        title="Home">Home</a>
      <a
        href="https://github.com/itzcozi/markd"
        title="Source code">Source code</a>
    </div>
  </div>
</div>
