import { dateModule } from "./placeholder";
import type { InputEnhancer } from "carta-md";

function insertLine(input: any, string: string) {
  const line = input.getLine();
  if (line.value !== "") {
    input.insertAt(line.end, `\n${string}`);
    const newPos = line.end + string.length + 1;
    input.textarea.selectionStart = newPos;
    input.textarea.selectionEnd = newPos;
  } else {
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
    action: (input) =>
      insertLine(
        input,
        "## Table of Contents\n\n" +
          "* [Installation](#installation)\n" +
          "* [Features](#features)\n" +
          "* [API Reference](#api-reference)\n" +
          "* [Contributing](#contributing)\n" +
          "* [FAQ](#faq)\n" +
          "* [Support](#support)\n" +
          "* [License](#license)",
      ),
  },
  {
    id: "horizontalRule",
    group: "Basic",
    title: "Horizontal Rule",
    description: "Add a horizontal rule (divider)",
    action: (input: InputEnhancer) => insertLine(input, "---"),
  },
  {
    id: "noteAdmonition",
    group: "Basic",
    title: "Note",
    description: "Add a note admonition",
    action: (input: InputEnhancer) => insertLine(input, "> [!NOTE]\n" + "> Something *Noteworthy*"),
  },
  {
    id: "importantAdmonition",
    group: "Basic",
    title: "Important",
    description: "Add an important admonition",
    action: (input: InputEnhancer) =>
      insertLine(input, "> [!IMPORTANT]\n" + "> Something *Important*"),
  },
  {
    id: "tipAdmonition",
    group: "Basic",
    title: "Tip",
    description: "Add a tip admonition",
    action: (input: InputEnhancer) => insertLine(input, "> [!TIP]\n" + "> Something *Helpful*"),
  },
  {
    id: "cautionAdmonition",
    group: "Basic",
    title: "Caution",
    description: "Add a caution admonition",
    action: (input: InputEnhancer) => insertLine(input, "> [!CAUTION]\n" + "> Don't do ____!"),
  },
  {
    id: "warningAdmonition",
    group: "Basic",
    title: "Warning",
    description: "Add a warning admonition",
    action: (input: InputEnhancer) => insertLine(input, "> [!WARNING]\n" + "> Something *Scary*"),
  },
  {
    id: "table-2x2",
    group: "Basic",
    title: "2x2 Table",
    description: "Create a 2x2 table in markdown",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "| Header 1 | Header 2 |\n" +
          "| -------- | -------- |\n" +
          "| Cell 1   | Cell 2   |\n" +
          "| Cell 3   | Cell 4   |",
      ),
  },
  {
    id: "table-3x3",
    group: "Basic",
    title: "3x3 Table",
    description: "Create a 3x3 table in markdown",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "| Header 1 | Header 2 | Header 3 |\n" +
          "| -------- | -------- | -------- |\n" +
          "| Cell 1   | Cell 2   | Cell 3   |\n" +
          "| Cell 4   | Cell 5   | Cell 6   |\n" +
          "| Cell 7   | Cell 8   | Cell 9   |",
      ),
  },
  {
    id: "table-4x4",
    group: "Basic",
    title: "4x4 Table",
    description: "Create a 4x4 table in markdown",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "| Header 1 | Header 2 | Header 3 | Header 4 |\n" +
          "| -------- | -------- | -------- | -------- |\n" +
          "| Cell 1   | Cell 2   | Cell 3   | Cell 4   |\n" +
          "| Cell 5   | Cell 6   | Cell 7   | Cell 8   |\n" +
          "| Cell 9   | Cell 10  | Cell 11  | Cell 12  |\n" +
          "| Cell 13  | Cell 14  | Cell 15  | Cell 16  |",
      ),
  },
  {
    id: "table-5x5",
    group: "Basic",
    title: "5x5 Table",
    description: "Create a 5x5 table in markdown",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "| Header 1 | Header 2 | Header 3 | Header 4 | Header 5 |\n" +
          "| -------- | -------- | -------- | -------- | -------- |\n" +
          "| Cell 1   | Cell 2   | Cell 3   | Cell 4   | Cell 5   |\n" +
          "| Cell 6   | Cell 7   | Cell 8   | Cell 9   | Cell 10  |\n" +
          "| Cell 11  | Cell 12  | Cell 13  | Cell 14  | Cell 15  |\n" +
          "| Cell 16  | Cell 17  | Cell 18  | Cell 19  | Cell 20  |\n" +
          "| Cell 21  | Cell 22  | Cell 23  | Cell 24  | Cell 25  |",
      ),
  },

  // Advanced
  {
    id: "date",
    group: "Advanced",
    title: "Date",
    description: "Add the date",
    action: (input: InputEnhancer) => insertLine(input, dateModule),
  },
  {
    id: "definitionList",
    group: "Advanced",
    title: "Definition List",
    description: "Create a definition list in a dictionary style",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "| Term               | Definition                                                                                     |\n" +
          "|--------------------|------------------------------------------------------------------------------------------------|\n" +
          "| API                | An Application Programming Interface (API) is a set of rules that allows different software entities to communicate. |\n" +
          "| Markdown           | A lightweight markup language with plain-text formatting syntax, commonly used for writing documentation.      |",
      ),
  },
  {
    id: "math",
    group: "Advanced",
    title: "Math",
    description: "Create a mathematical equation",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "$$\n" + "\\text{slope} = \\frac{f(5) - f(4)}{-1} = \\frac{0 - 1}{-1} = 1\n" + "$$",
      ),
  },
  {
    id: "indented-paragraphs",
    group: "Advanced",
    title: "Indented Paragraphs",
    description: "Create indented paragraphs",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        '<p style="text-indent: 30px;">\n' + "  This is an indented paragraph.\n" + "</p>",
      ),
  },
  {
    id: "indented-paragraphs-double-spacing",
    group: "Advanced",
    title: "Indented Paragraph with Double Line Spacing",
    description: "Create an indented paragraph with double line spacing",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        '<p style="text-indent: 30px; line-height: 2;">\n' +
          "  This is an indented paragraph with double line spacing.\n" +
          "</p>",
      ),
  },
  {
    id: "centered-header",
    group: "Advanced",
    title: "Centered Header",
    description: "Create a centered header",
    action: (input: InputEnhancer) =>
      insertLine(input, '<h1 style="text-align: center;">\n' + "  Centered Header\n" + "</h1>"),
  },
  {
    id: "centeredText",
    group: "Advanced",
    title: "Centered Text",
    description: "Center align text using HTML or Markdown",
    action: (input: InputEnhancer) =>
      insertLine(input, '<div style="text-align: center;">\n' + "Centered Text\n" + "</div>"),
  },
  {
    id: "footnote",
    group: "Advanced",
    title: "Footnote",
    description: "Add a footnote",
    action: (input: InputEnhancer) =>
      insertLine(input, "[^1]  \n\n[^1]: [Insert footnote text here.]"),
  },
  {
    id: "colorReference",
    group: "Advanced",
    title: "Color Reference",
    description: "Create a color reference section",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Color Reference\n\n" +
          "| Color Name | Color Code |\n" +
          "|------------|------------|\n" +
          "| Red        | #FF0000    |\n" +
          "| Blue       | #0000FF    |",
      ),
  },

  // Documentation
  {
    id: "intro",
    group: "Documentation",
    title: "Introduction",
    description: "Add an introduction section",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Introduction\n\n" +
          "Welcome to the project documentation. This guide will walk you through all the necessary steps to understand, install, and use the project efficiently. Whether you're a contributor or user, this documentation will help you navigate the setup, features, and best practices.",
      ),
  },
  {
    id: "apiReference",
    group: "Documentation",
    title: "API Reference",
    description: "Add an API reference section",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# API Reference\n\n" +
          "### Endpoint 1: [GET]\n\n" +
          "**Description:** Retrieves a list of resources.\n\n" +
          "- **200 OK**: Returns a list of resources.\n" +
          "- **404 Not Found**: If the resource is not found.\n\n" +
          "---\n" +
          "### Endpoint 2: [POST]\n\n" +
          "**Description:** Creates a new resource.\n\n" +
          "**Response:**\n" +
          "- **201 Created**: Returns the created resource.\n" +
          "- **400 Bad Request**: If the input data is invalid.",
      ),
  },
  {
    id: "appendix",
    group: "Documentation",
    title: "Appendix",
    description: "Create an appendix section",
    action: (input: InputEnhancer) =>
      insertLine(input, "# Appendix\n\n" + "Additional information and resources."),
  },
  {
    id: "badge",
    group: "Documentation",
    title: "Badge",
    description: "Add a badge to your readme",
    action: (input: InputEnhancer) => insertLine(input, "[![Badge Name](Badge_URL)](Link)"),
  },
  {
    id: "contributing",
    group: "Documentation",
    title: "Contributing",
    description: "Add contributing guidelines",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Contributing\n\n" +
          "We welcome contributions to this project and appreciate your time and effort in improving it. Before contributing, please take a moment to review these guidelines to ensure a smooth process for everyone involved.\n\n" +
          "## How to Contribute\n\n" +
          "1. **Fork the repository**: Create a copy of the repository on your own GitHub account.\n" +
          "2. **Create a new branch**: It's best to make changes in a separate branch, such as `feature/your-feature-name` or `fix/your-bug-fix`.\n" +
          "3. **Make your changes**: Ensure that your code follows the project's coding standards and best practices.\n" +
          '4. **Commit your changes**: Write a clear and descriptive commit message (e.g., "Add feature X" or "Fix bug Y").\n' +
          "5. **Push to your branch**: Push the changes to your forked repository.\n" +
          "6. **Create a pull request**: Submit a pull request to the main branch of this repository. Ensure that you provide a clear description of your changes and any relevant issues or context.\n\n" +
          "## Code of Conduct\n\n" +
          "By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md), which fosters a positive and inclusive environment.\n\n" +
          "## Pull Request Guidelines\n\n" +
          "- **Test your changes**: Ensure that all existing and new tests pass.\n" +
          "- **Follow the coding style**: Make sure your code follows the project style (indentation, comments, naming conventions, etc.).\n" +
          "- **Keep commits small**: Try to break your contributions into logical chunks.\n" +
          "- **Update documentation**: If applicable, update any relevant documentation or add new documentation.\n\n" +
          "## Issues\n\n" +
          "Before submitting a new issue, please check if there’s an existing issue that addresses your problem. If you create a new issue, provide as much detail as possible (error messages, steps to reproduce, etc.).\n\n" +
          "We look forward to your contributions!",
      ),
  },
  {
    id: "demo",
    group: "Documentation",
    title: "Demo",
    description: "Add a demo section",
    action: (input: InputEnhancer) =>
      insertLine(input, "## Demo\n\n" + "See a live demo [here](Demo_Link)."),
  },
  {
    id: "deployment",
    group: "Documentation",
    title: "Deployment",
    description: "Add deployment instructions",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Deployment\n\n" +
          "## Prerequisites\n" +
          "Before deploying, ensure you have:\n" +
          "- **Node.js** (version X.X.X or higher)\n\n" +
          "## Deployment Steps\n" +
          "1. **Clone the Repository**:\n" +
          "```\n" +
          "git clone https://github.com/username/repo-name.git\n" +
          "```\n" +
          "**Install Dependencies**:\n" +
          "```\n" +
          "cd repo-name\n" +
          "npm install\n" +
          "```\n" +
          "3. **Build the Application**:\n" +
          "```\n" +
          "npm run build\n" +
          "```\n" +
          "4. **Run the Application**:\n" +
          "```\n" +
          "npm start\n" +
          "```",
      ),
  },
  {
    id: "environmentVariables",
    group: "Documentation",
    title: "Environment Variables",
    description: "List environment variables",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Environment Variables\n\n" +
          "## Overview\n" +
          "Environment variables are essential for configuring your application.\n\n" +
          "## List of Variables\n" +
          "- **`DATABASE_URL`**: Connection string for the database.\n" +
          "- **`API_KEY`**: Your API key for accessing third-party services.\n" +
          "- **`PORT`**: The port on which the application will run (default is 3000).\n" +
          "- **`NODE_ENV`**: The environment in which the application is running (e.g., development, production).\n\n" +
          "## Example\n" +
          "To set these variables, you can use a `.env` file:\n" +
          "```\n" +
          "DATABASE_URL=mongodb://user:password@host:port/database\n" +
          "API_KEY=your_api_key\n" +
          "PORT=3000\n" +
          "NODE_ENV=production\n" +
          "```\n" +
          "Make sure to restart the application after changing environment variables.",
      ),
  },
  {
    id: "faq",
    group: "Documentation",
    title: "FAQ",
    description: "Provide a frequently asked questions section to address common inquiries.",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# FAQ\n\n" +
          "This section addresses common questions and concerns regarding the project:\n\n" +
          "**Q:** What technologies are used in this project?\n\n" +
          "**A:** We use a combination of React for the frontend, Node.js for the backend, and MongoDB for the database.\n\n" +
          "**Q:** How can I contribute to the project?\n\n" +
          "**A:** Contributions are welcome! Please check the guidelines in the CONTRIBUTING.md file for more information.\n\n",
      ),
  },
  {
    id: "features",
    group: "Documentation",
    title: "Features",
    description: "List features of your project in a checklist format.",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Features\n\n" +
          "- [x] **Feature 1**\n" +
          "- [x] **Feature 2**\n" +
          "- [x] **Feature 3**\n",
      ),
  },
  {
    id: "feedback",
    group: "Documentation",
    title: "Feedback",
    description: "Add a feedback section",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Feedback\n\n" +
          "We welcome your feedback. Please reach out to us at [email](mailto:email@example.com).",
      ),
  },
  {
    id: "installation",
    group: "Documentation",
    title: "Installation",
    description: "Add installation instructions",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Installation\n\n" + "To install, run:\n" + "```\n" + "npm install\n" + "```",
      ),
  },
  {
    id: "license",
    group: "Documentation",
    title: "License",
    description: "Add license information",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# License\n\n" +
          "This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.",
      ),
  },
  {
    id: "logo",
    group: "Documentation",
    title: "Logo",
    description: "Add a logo to your project",
    action: (input: InputEnhancer) => insertLine(input, "![Logo](Logo_URL)"),
  },
  {
    id: "optimizations",
    group: "Documentation",
    title: "Optimizations",
    description: "Add optimizations used in the project",
    action: (input: InputEnhancer) =>
      insertLine(input, "# Optimizations\n\n" + "- Optimization 1\n" + "- Optimization 2"),
  },
  {
    id: "roadmap",
    group: "Documentation",
    title: "Roadmap",
    description: "Outline the upcoming features and milestones for the project.",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Roadmap\n\n" +
          "This roadmap highlights the planned features and important milestones for the project:\n\n" +
          "### Q1 2024\n" +
          "- **Feature 1**: Implementation of user authentication system.\n" +
          "- **Feature 2**: Launch of the new dashboard UI for better analytics.\n\n" +
          "### Q2 2024\n" +
          "- **Feature 3**: Integration with third-party APIs for enhanced functionality.\n" +
          "- **Feature 4**: Performance improvements and optimization.\n\n",
      ),
  },
  {
    id: "runLocally",
    group: "Documentation",
    title: "Run Locally",
    description: "Instructions to run the project locally",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Run Locally\n\n" +
          "To run this project locally, clone the repository and run:\n" +
          "```\n" +
          "npm start\n" +
          "```",
      ),
  },
  {
    id: "screenshot",
    group: "Documentation",
    title: "Screenshot",
    description: "Add screenshots of your project",
    action: (input: InputEnhancer) =>
      insertLine(input, "# Screenshots\n\n" + "![Screenshot](Screenshot_URL)"),
  },
  {
    id: "support",
    group: "Documentation",
    title: "Support",
    description: "Add support information",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Support\n\n" + "For support, please contact us at [email](mailto:email@example.com).",
      ),
  },
  {
    id: "tech",
    group: "Documentation",
    title: "Tech Stack",
    description:
      "List the tech stack used in the project, including frameworks, libraries, and tools.",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Tech Stack\n\n" +
          "This section outlines the technologies utilized in this project:\n\n" +
          "## Frontend\n" +
          "- **React**: A JavaScript library for building user interfaces.\n" +
          "- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.\n\n",
      ),
  },
  {
    id: "runningTests",
    group: "Documentation",
    title: "Running Tests",
    description: "Instructions for running tests",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Running Tests\n\n" + "To run tests, use:\n" + "```\n" + "npm test\n" + "```",
      ),
  },
  {
    id: "usageExamples",
    group: "Documentation",
    title: "Usage/Examples",
    description: "Code usage example",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Usage Examples\n\n" + "```javascript\n" + "// Example code goes here\n" + "```",
      ),
  },
  {
    id: "acknowledgements",
    group: "Documentation",
    title: "Acknowledgements",
    description: "Create an acknowledgements section",
    action: (input: InputEnhancer) =>
      insertLine(
        input,
        "# Acknowledgements\n\n" + "Thank you to everyone who contributed to this project.",
      ),
  },
];
