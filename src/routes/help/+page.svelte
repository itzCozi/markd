<script lang="ts">
  import LargePageLayout from "$lib/components/layout/LargePageLayout.svelte";
  import HelpEntry from "$lib/components/layout/HelpEntry.svelte";
  import Divider from "$lib/components/type/Divider.svelte";
  import Paragraph from "$lib/components/type/Paragraph.svelte";
  import { CircleAlert } from "lucide-svelte";
</script>

<LargePageLayout>
  <h2 class="text-3xl mb-2 font-semibold text-type-emphasized">
    How to use <span class="underline decoration-1 underline-offset-4 decoration-wavy">MarkD</span
    >own
  </h2>
  <Paragraph>
    Markdown is a lightweight markup language with plain text formatting syntax. Its design allows
    easy conversion to HTML and other formats, and its syntax is influenced by Perl. Markdown is
    often used to format readme files, for writing messages in online discussion forums, and to
    create rich text using a plain text editor. Here I will teach you how to use markdown, both
    basic syntax and our custom site-specific syntax.
  </Paragraph>

  <div class="flex flex-row gap-2 items-center">
    <h3 class="text-2xl my-2 text-type-emphasized">IntelliSense</h3>
    <CircleAlert class="text-type-dimmed w-4 h-4 mb-3 -ml-1" />
  </div>
  <Paragraph>
    Our editor features IntelliSense. Type / to see available commands, or : for emoji selection.
    You can create headers, lists, tables and basically anything using our IntelliSense.
  </Paragraph>

  <Divider className="mt-4" />

  <HelpEntry
    title="Headers"
    description="Headers are defined by the number of # symbols before the text. The number of # symbols determines the size of the header. The maximum number of # symbols is 6."
    example="# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6" />

  <HelpEntry
    title="Hyperlinks"
    description="Hyperlinks are defined by the text you want to display in square brackets followed by the URL in round brackets."
    example="[example link](https://example.com)" />

  <HelpEntry
    title="Text Styles"
    description="Text styles are defined by wrapping the text in asterisks or underscores. Single asterisks is interpreted as italics, double asterisks is interpreted as bold, and triple asterisks is interpreted as bold italics."
    example="*Italics* _Italics_ **Bold** __Bold__ ***Bold Italics*** ___Bold Italics___" />

  <HelpEntry
    title="Lists"
    description="Lists are defined using - or * symbols, followed by text. Either a hyphen or an asterisk can be used. Numbered lists are defined using numbers followed by a period."
    example="- Item 1
- Item 2
- Item 3

1. First item
2. Second item
3. Third item" />

  <HelpEntry
    title="Checklists"
    description="Checklists are defined by using - [ ] for an unchecked box and - [x] the - can be replaced with an * as well."
    example="- [ ] Unchecked box
- [x] Checked box" />

  <HelpEntry
    title="Strikethrough"
    description="Strikethrough's are defined using &#x7e;&#x7e; symbols before and after the text you want to strikethrough, this is very useful for todo lists among other things."
    example="~~very secret information~~" />

  <HelpEntry
    title="Blockquote"
    description="Blockquotes are defined using the &gt; symbol followed by the text you want to standout, this is usually used for quotes or as a substitute callouts."
    example="> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." />

  <HelpEntry
    title="Code"
    description="Code is defined using the ` symbol. Inline code is defined by wrapping the code in singular backticks. Block code is defined by wrapping the code in triple backticks. Code blocks allow for syntax highlighting by specifying the language after the first set of triple backticks."
    example="`git clone https://github.com/itzcozi/markd.git`

```py
number1 = 1
number2 = 2
print(number1 + number2)
```" />

  <HelpEntry
    title="Image"
    description="Images are defined similarly to hyperlinks, but with an exclamation mark in front of the square brackets and the text in the rounded brackets is the media's web address."
    example="![alt text](https://picsum.photos/200/300)" />

  <HelpEntry
    title="Dividers"
    description="Dividers are defined by three or more hyphens, asterisks, or underscores creating a horizontal line."
    example="---
***
___" />

  <HelpEntry
    title="Tables"
    description="Tables are defined by using pipes | to separate columns and hyphens - to separate the header row from the content."
    example="| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |" />

  <HelpEntry
    title="Admonitions"
    description="Admonitions are defined by using the &#62; symbol followed by the type of admonition you want to use and the text you want to display. The admonition types are [!NOTE], [!IMPORTANT], [!TIP], [!CAUTION] and [!WARNING]."
    example="> [!NOTE]
> Something *Noteworthy*" />

  <HelpEntry
    title="Subscript & Superscript"
    description="Subscript is defined using two of the ~ symbol followed by the text you want to be subscripted. Superscript is defined using two the caret ^ symbol followed by the text you want to be superscripted."
    example={`H~2~O is a liquid. 2^10^ is 1024.
or
$H_20$ is a liquid. $2^{10}$ is 1024.`} />

  <HelpEntry
    title="Math"
    description="Math is defined using the $$ symbol followed by an equation in LaTeX format, then followed by an ending set of double dollar signs."
    example={`$$
f(5) = (5 - 5)^2 = 0
$$

$$
\\text{slope} = \\frac{f(5) - f(4)}{-1} = \\frac{0 - 1}{-1} = 1
$$`}>
    <Paragraph className="py-2">Math preview:</Paragraph>
    <button
      onclick={() => open("https://i.postimg.cc/3wGPNSC5/math-example.png", "_blank")}
      title="Math example">
      <img
        src="/math-example.png"
        alt="Math example"
        title="Math example"
        class="max-w-[400px] w-[99%] rounded" />
    </button>
  </HelpEntry>

  <HelpEntry
    title="HTML Code"
    description="Our editor allows for HTML code to be used in the same file as markdown. This is useful for centering text and other more complex things markdown doesn't support natively." />
</LargePageLayout>
