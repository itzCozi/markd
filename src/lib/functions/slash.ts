import type { InputEnhancer } from "carta-md";

function insertLine(input: any, string: string) {
  const line = input.getLine();
  if (line.value !== '') {
      input.insertAt(line.end, `\n${string}`);
      const newPos = line.end + string.length + 1;
      input.textarea.selectionStart = newPos;
      input.textarea.selectionEnd = newPos;
  }
  else {
      input.insertAt(line.end, `${string}`);
      const newPos = line.end + string.length;
      input.textarea.selectionStart = newPos;
      input.textarea.selectionEnd = newPos;
  }
}

export interface SlashSnippet {
  id: string;
  group: string;
  title: string;
  description: string;
  action: (input: InputEnhancer) => void;
}

export const additionalSnippets: SlashSnippet[] = [
  // Basic
  {
    id: "tableOfContents",
    group: "Basic",
    title: "Table of Contents",
    description: "Create a table of contents",
    action: (input) => insertLine(input, '# Table of Contents\n\n* [Heading 1](#heading-1)\n* [Heading 2](#heading-2)\n* [Heading 3](#heading-3)')
  },
  {
    id: "horizontalRule",
    group: "Basic",
    title: "Horizontal Rule",
    description: "Add a horizontal rule",
    action: (input: InputEnhancer) => insertLine(input, '---')
  },
  {
    id: "table-2x2",
    group: "Basic",
    title: "2x2 Table",
    description: "Create a 2x2 table in markdown",
    action: (input: InputEnhancer) => insertLine(input, '| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1   | Cell 2   |\n| Cell 3   | Cell 4   |')
  },
  {
    id: "table-3x3",
    group: "Basic",
    title: "3x3 Table",
    description: "Create a 3x3 table in markdown",
    action: (input: InputEnhancer) => insertLine(input, '| Header 1 | Header 2 | Header 3 |\n| -------- | -------- | -------- |\n| Cell 1   | Cell 2   | Cell 3   |\n| Cell 4   | Cell 5   | Cell 6   |\n| Cell 7   | Cell 8   | Cell 9   |')
  },
  {
    id: "table-4x4",
    group: "Basic",
    title: "4x4 Table",
    description: "Create a 4x4 table in markdown",
    action: (input: InputEnhancer) => insertLine(input, '| Header 1 | Header 2 | Header 3 | Header 4 |\n| -------- | -------- | -------- | -------- |\n| Cell 1   | Cell 2   | Cell 3   | Cell 4   |\n| Cell 5   | Cell 6   | Cell 7   | Cell 8   |\n| Cell 9   | Cell 10  | Cell 11  | Cell 12  |\n| Cell 13  | Cell 14  | Cell 15  | Cell 16  |')
  },
  {
    id: "table-5x5",
    group: "Basic",
    title: "5x5 Table",
    description: "Create a 5x5 table in markdown",
    action: (input: InputEnhancer) => insertLine(input, '| Header 1 | Header 2 | Header 3 | Header 4 | Header 5 |\n| -------- | -------- | -------- | -------- | -------- |\n| Cell 1   | Cell 2   | Cell 3   | Cell 4   | Cell 5   |\n| Cell 6   | Cell 7   | Cell 8   | Cell 9   | Cell 10  |\n| Cell 11  | Cell 12  | Cell 13  | Cell 14  | Cell 15  |\n| Cell 16  | Cell 17  | Cell 18  | Cell 19  | Cell 20  |\n| Cell 21  | Cell 22  | Cell 23  | Cell 24  | Cell 25  |')
  },

  // Advanced
  {
    id: "definitionList",
    group: "Advanced",
    title: "Definition List",
    description: "Create a definition list",
    action: (input: InputEnhancer) => insertLine(input, 'Term 1\n: Definition 1\n\nTerm 2\n: Definition 2')
  },
  {
    id: "indented-paragraphs",
    group: "Advanced",
    title: "Indented Paragraphs",
    description: "Create indented paragraphs",
    action: (input: InputEnhancer) => insertLine(input, '<p style="text-indent: 30px;">\n  This is an indented paragraph.\n</p>')
  },
  {
    id: "indented-paragraphs-double-spacing",
    group: "Advanced",
    title: "Indented Paragraph with Double Line Spacing",
    description: "Create an indented paragraph with double line spacing",
    action: (input: InputEnhancer) => insertLine(input, '<p style="text-indent: 30px; line-height: 2;">\n  This is an indented paragraph with double line spacing.\n</p>')
  },
  {
    id: "centered-header",
    group: "Advanced",
    title: "Centered Header",
    description: "Create a centered header",
    action: (input: InputEnhancer) => insertLine(input, '<h1 style="text-align: center;">\n  Centered Header\n</h1>')
  },
  {
    id: "footnote",
    group: "Advanced",
    title: "Footnote",
    description: "Add a footnote",
    action: (input: InputEnhancer) => insertLine(input, '[^1]\n\n[^1]: Footnote text')
  },
  {
    id: "flex",
    group: "Advanced",
    title: "Flex",
    description: "Create a flex container",
    action: (input: InputEnhancer) => insertLine(input, '<div style="display: flex;">\n  <!-- Flex items go here -->\n</div>')
  },
  {
    id: "colorReference",
    group: "Advanced",
    title: "Color Reference",
    description: "Create a color reference section",
    action: (input: InputEnhancer) => insertLine(input, '# Color Reference\n\n| Color Name | Color Code |\n|------------|------------|\n| Red        | #FF0000    |\n| Blue       | #0000FF    |')
  },

  // Documentation
  {
    id: "apiReference",
    group: "Documentation",
    title: "API Reference",
    description: "Add an API reference section",
    action: (input: InputEnhancer) => insertLine(input, '# API Reference\n\n## Endpoint 1\n\nDescription...\n\n## Endpoint 2\n\nDescription...')
  },
  {
    id: "appendix",
    group: "Documentation",
    title: "Appendix",
    description: "Create an appendix section",
    action: (input: InputEnhancer) => insertLine(input, '# Appendix\n\nAdditional information and resources.')
  },
  {
    id: "badges",
    group: "Documentation",
    title: "Badges",
    description: "Add badges to your project",
    action: (input: InputEnhancer) => insertLine(input, '[![Badge Name](Badge_URL)](Link)')
  },
  {
    id: "contributing",
    group: "Documentation",
    title: "Contributing",
    description: "Add contributing guidelines",
    action: (input: InputEnhancer) => insertLine(input, '# Contributing\n\nPlease follow these guidelines to contribute...')
  },
  {
    id: "demo",
    group: "Documentation",
    title: "Demo",
    description: "Add a demo section",
    action: (input: InputEnhancer) => insertLine(input, '# Demo\n\nSee a live demo [here](Demo_Link).')
  },
  {
    id: "deployment",
    group: "Documentation",
    title: "Deployment",
    description: "Add deployment instructions",
    action: (input: InputEnhancer) => insertLine(input, '# Deployment\n\nInstructions for deploying the application...')
  },
  {
    id: "documentation",
    group: "Documentation",
    title: "Documentation",
    description: "Add a documentation section",
    action: (input: InputEnhancer) => insertLine(input, '# Documentation\n\nRefer to [this link](Documentation_Link) for more information.')
  },
  {
    id: "environmentVariables",
    group: "Documentation",
    title: "Environment Variables",
    description: "List environment variables",
    action: (input: InputEnhancer) => insertLine(input, '# Environment Variables\n\n- `VAR_NAME`: Description of the variable.')
  },
  {
    id: "faq",
    group: "Documentation",
    title: "FAQ",
    description: "Add a FAQ section",
    action: (input: InputEnhancer) => insertLine(input, '# FAQ\n\n**Q:** Your question?\n\n**A:** Your answer.')
  },
  {
    id: "features",
    group: "Documentation",
    title: "Features",
    description: "List features of your project",
    action: (input: InputEnhancer) => insertLine(input, '# Features\n\n- Feature 1\n- Feature 2\n- Feature 3')
  },
  {
    id: "feedback",
    group: "Documentation",
    title: "Feedback",
    description: "Add a feedback section",
    action: (input: InputEnhancer) => insertLine(input, '# Feedback\n\nWe welcome your feedback. Please reach out to us at [email](mailto:email@example.com).')
  },
  {
    id: "installation",
    group: "Documentation",
    title: "Installation",
    description: "Add installation instructions",
    action: (input: InputEnhancer) => insertLine(input, '# Installation\n\nTo install, run:\n```\nnpm install\n```')
  },
  {
    id: "license",
    group: "Documentation",
    title: "License",
    description: "Add license information",
    action: (input: InputEnhancer) => insertLine(input, '# License\n\nThis project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.')
  },
  {
    id: "logo",
    group: "Documentation",
    title: "Logo",
    description: "Add a logo to your project",
    action: (input: InputEnhancer) => insertLine(input, '![Logo](Logo_URL)')
  },
  {
    id: "optimizations",
    group: "Documentation",
    title: "Optimizations",
    description: "Add optimizations used in the project",
    action: (input: InputEnhancer) => insertLine(input, '# Optimizations\n\n- Optimization 1\n- Optimization 2')
  },
  {
    id: "roadmap",
    group: "Documentation",
    title: "Roadmap",
    description: "Add a roadmap section",
    action: (input: InputEnhancer) => insertLine(input, '# Roadmap\n\n- Feature 1\n- Feature 2')
  },
  {
    id: "runLocally",
    group: "Documentation",
    title: "Run Locally",
    description: "Instructions to run the project locally",
    action: (input: InputEnhancer) => insertLine(input, '# Run Locally\n\nTo run this project locally, clone the repository and run:\n```\nnpm start\n```')
  },
  {
    id: "screenshots",
    group: "Documentation",
    title: "Screenshots",
    description: "Add screenshots of your project",
    action: (input: InputEnhancer) => insertLine(input, '# Screenshots\n\n![Screenshot](Screenshot_URL)')
  },
  {
    id: "support",
    group: "Documentation",
    title: "Support",
    description: "Add support information",
    action: (input: InputEnhancer) => insertLine(input, '# Support\n\nFor support, please contact us at [email](mailto:email@example.com).')
  },
  {
    id: "tech",
    group: "Documentation",
    title: "Tech Stack",
    description: "List the tech stack used in the project",
    action: (input: InputEnhancer) => insertLine(input, '# Tech Stack\n\n- Technology 1\n- Technology 2\n- Technology 3')
  },
  {
    id: "runningTests",
    group: "Documentation",
    title: "Running Tests",
    description: "Instructions for running tests",
    action: (input: InputEnhancer) => insertLine(input, '# Running Tests\n\nTo run tests, use:\n```\nnpm test\n```')
  },
  {
    id: "usageExamples",
    group: "Documentation",
    title: "Usage/Examples",
    description: "Provide usage examples",
    action: (input: InputEnhancer) => insertLine(input, '# Usage Examples\n\n```javascript\n// Example code goes here\n```')
  },
  {
    id: "acknowledgements",
    group: "Documentation",
    title: "Acknowledgements",
    description: "Create an acknowledgements section",
    action: (input: InputEnhancer) => insertLine(input, '# Acknowledgements\n\nThank you to everyone who contributed to this project.')
  },
];