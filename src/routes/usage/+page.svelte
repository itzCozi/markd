<!--https://rentry.org/how-->

<div class="flex pt-8 bg-mono-background justify-center items-center">
  <div class="p-4 bg-mono-accent max-w-3xl rounded-md">
    <p class="text-3xl font-semibold">Usage</p>
    <p class="text-type-dimmed mt-2">
      Markdown is a lightweight markup language with plain text formatting syntax. Its design allows
      easy conversion to HTML and other formats, and its syntax is influenced by Perl. Markdown is
      often used to format readme files, for writing messages in online discussion forums, and to
      create rich text using a plain text editor. Here I will teach you how to use markdown, both
      basic syntax and our custom site specific syntax.
    </p>

    <div class="my-4">
      <p class="text-2xl my-2 text-type-emphasized">Headers</p>
      <p class="text-type-dimmed">
        Headers are defined by the number of <code>#</code> symbols before the text. The number of <code>#</code> symbols
        determines the size of the header. The maximum number of <code>#</code> symbols is 6.
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
        Hyperlinks are defined by the text you want to display in square brackets followed
        by the URL in round brackets.
      </p>
<pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
[example link](https://example.com)
</pre>
    </div>

    <div class="my-4">
      <p class="text-2xl my-2 text-type-emphasized">Lists</p>
      <p class="text-type-dimmed">
        Lists are defined using <code>-</code> or <code>*</code> symbols, followed by text.
        Either a hyphen or an asterisk can be used. Numbered lists are defined using numbers
        followed by a period.
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
      <p class="text-2xl my-2 text-type-emphasized">Blockquote</p>
      <p class="text-type-dimmed">
        Blockquotes are defined using the <code>&gt;</code> symbol followed by
        the text you want to standout, this is usually used for quotes or as a substitute callouts.
      </p>
<pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
</pre>
    </div>

    <div class="my-4">
      <p class="text-2xl my-2 text-type-emphasized">Code</p>
      <p class="text-type-dimmed">
        Code is defined using the <code>`</code> symbol.
        Inline code is defined by wrapping the code in singular backticks.
        Block code is defined by wrapping the code in triple backticks.
      </p>
<pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
`git clone https://github.com/itzcozi/markd.git`

```
number1 = 1
number2 = 2
print(number1 + number2)
```
</pre>
    </div>

    <div class="my-4">
      <p class="text-2xl my-2 text-type-emphasized">Image</p>
      <p class="text-type-dimmed">
        Images are defined similarly to hyperlinks, but with an exclamation mark in front 
        of the square brackets and the text in the rounded brackets is the media's web address.
      </p>
<pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
![alt text](https://picsum.photos/200/300)
</pre>
    </div>

    <div class="my-4">
      <p class="text-2xl my-2 text-type-emphasized">Dividers</p>
      <p class="text-type-dimmed">
        Dividers are defined by three or more hyphens, asterisks, or underscores creating a horizontal line.
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
        Tables are defined by using pipes <code>|</code> to separate columns and hyphens <code>-</code> to separate the header row from the content.
      </p>
<pre class="text-mono bg-mono-card p-3 my-1 rounded-sm text-wrap">
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
</pre>
    </div>

    <p class="text-xs mt-4">
      Created by <a href="https://github.com/itzcozi" title="Developer github">BadDeveloper</a> with
      💙
    </p>
  </div>
</div>
