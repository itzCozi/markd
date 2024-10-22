<script>
  import LargePageLayout from "$lib/components/LargePageLayout.svelte";
  import { CircleAlert } from "lucide-svelte";

  const latexCode = `\\text{slope} = \\frac{f(5) - f(4)}{-1} = \\frac{0 - 1}{-1} = 1`;
</script>

<LargePageLayout>
  <p class="text-3xl font-semibold">How to use Markdown</p>
  <p class="text-type-dimmed mt-2">
    Markdown is a lightweight markup language with plain text formatting syntax. Its design allows
    easy conversion to HTML and other formats, and its syntax is influenced by Perl. Markdown is
    often used to format readme files, for writing messages in online discussion forums, and to
    create rich text using a plain text editor. Here I will teach you how to use markdown, both
    basic syntax and our custom site-specific syntax.
  </p>

  <div class="flex flex-row gap-2 items-center">
    <p class="text-2xl font-semibold mt-2">IntelliSense</p>
    <CircleAlert class="text-type-dimmed w-4 h-4" />
  </div>
  <p class="text-type-dimmed mt-2">
    Our editor features IntelliSense. Type <code>/</code> to see available commands, or
    <code>:</code> for emoji selection. You can create headers, lists, tables and basically anything
    using our IntelliSense.
  </p>
  <hr class="border-b border-mono-accentLight2 my-4 border-0" />

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Headers</p>
    <p class="text-type-dimmed">
      Headers are defined by the number of <code>#</code> symbols before the text. The number of
      <code>#</code>
      symbols determines the size of the header. The maximum number of <code>#</code> symbols is 6.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Hyperlinks</p>
    <p class="text-type-dimmed">
      Hyperlinks are defined by the text you want to display in square brackets followed by the URL
      in round brackets.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
[example link](https://example.com)
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Text Styles</p>
    <p class="text-type-dimmed">
      Text styles are defined by wrapping the text in asterisks or underscores. Single asterisks is
      interpreted as italics, double asterisks is interpreted as bold, and triple asterisks is
      interpreted as bold italics.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
*Italics* _Italics_ **Bold** __Bold__ ***Bold Italics*** ___Bold Italics___
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Lists</p>
    <p class="text-type-dimmed">
      Lists are defined using <code>-</code> or <code>*</code> symbols, followed by text. Either a hyphen
      or an asterisk can be used. Numbered lists are defined using numbers followed by a period.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
- Item 1
- Item 2
- Item 3

1. First item
2. Second item
3. Third item
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Checklists</p>
    <p class="text-type-dimmed">
      Checklists are defined by using <code>- [ ]</code> for an unchecked box and
      <code>- [x]</code>
      the <code>-</code> can be replaced with an <code>*</code> as well.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
- [ ] Unchecked box
- [x] Checked box
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Strikethrough</p>
    <p class="text-type-dimmed">
      Strikethrough's are defined using <code>&#x7e;&#x7e;</code> symbols before and after the text you
      want to strikethrough, this is very useful for todo lists among other things.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
~~very secret information~~
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Blockquote</p>
    <p class="text-type-dimmed">
      Blockquotes are defined using the <code>&gt;</code> symbol followed by the text you want to standout,
      this is usually used for quotes or as a substitute callouts.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Code</p>
    <p class="text-type-dimmed">
      Code is defined using the <code>`</code> symbol. Inline code is defined by wrapping the code in
      singular backticks. Block code is defined by wrapping the code in triple backticks. Code blocks
      allow for syntax highlighting by specifying the language after the first set of triple backticks.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap overflow-x-auto max-w-full">
`git clone https://github.com/itzcozi/markd.git`

```py
number1 = 1
number2 = 2
print(number1 + number2)
```
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Image</p>
    <p class="text-type-dimmed">
      Images are defined similarly to hyperlinks, but with an exclamation mark in front of the
      square brackets and the text in the rounded brackets is the media's web address.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
![alt text](https://picsum.photos/200/300)
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Dividers</p>
    <p class="text-type-dimmed">
      Dividers are defined by three or more hyphens, asterisks, or underscores creating a horizontal
      line.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
---
***
___
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Tables</p>
    <p class="text-type-dimmed">
      Tables are defined by using pipes <code>|</code> to separate columns and hyphens
      <code>-</code> to separate the header row from the content.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Admonitions</p>
    <p class="text-type-dimmed">
      Admonitions are defined by using the <code>&#62;</code> symbol followed by the type of
      admonition you want to use and the text you want to display. The admonition types are
      <code>[!NOTE]</code>, <code>[!IMPORTANT]</code>, <code>[!TIP]</code>,
      <code>[!CAUTION]</code>
      and <code>[!WARNING]</code>.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
> [!NOTE]
> Something *Noteworthy*
</pre>
  </div>

  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">Math</p>
    <p class="text-type-dimmed">
      Math is defined using the <code>$$</code> symbol followed by an equation in LaTeX format, then
      followed by an ending set of double dollar signs.
    </p>
    <pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
$$
f(5) = (5 - 5)^2 = 0
$$

$$
{@html latexCode}
$$
</pre>
    <p class="text-type-dimmed py-2">Math Preview:</p>
    <div class="flex">
      <img
        src="/math-example.png"
        alt="logo"
        class="max-w-[400px] w-[99%]" />
    </div>
  </div>
  <div class="my-4">
    <p class="text-2xl my-2 text-type-emphasized">HTML Code</p>
    <p class="text-type-dimmed">
      Our editor allows for HTML code to be used in the same file as markdown. This is useful for
      centering text and other more complex things markdown doesn't support natively.
    </p>
  </div>

  <p class="text-xs mt-8">
    Created by <a
      href="https://github.com/itzcozi"
      title="BadDeveloper's github">BadDeveloper</a>
    and
    <a
      href="https://github.com/Pasithea0"
      title="Pas's github">Pasithea</a> with 💙
  </p>
</LargePageLayout>
