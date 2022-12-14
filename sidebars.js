/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // clarigen: [{ type: "autogenerated", dirName: "." }],
  clarigen: [
    "intro",
    "getting-started",
    {
      type: "category",
      label: "Tutorials",
      collapsed: false,
      items: ["write-tests-tutorial"],
    },
    {
      type: "category",
      label: "Environments",
      collapsed: false,
      items: ["deno"],
      // items: ["deno", "web", "node"],
    },
    // "core-concepts",
    "configuration",
    "cli",
    "documentation",
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
