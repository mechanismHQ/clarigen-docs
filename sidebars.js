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
    'getting-started',
    'intro',
    {
      type: 'category',
      label: 'Clarinet tests',
      collapsed: false,
      items: ['deno', 'deno/api', 'deno/write-tests-tutorial'],
      // items: ["deno", "web", "node"],
    },
    {
      type: 'category',
      collapsed: false,
      items: [
        'web/quick-start',
        'web/read-only-functions',
        'web/transactions',
        'web/factory',
        'web/deployments',
        'web/node',
      ],
      label: 'Building web apps',
    },
    // "core-concepts",
    'configuration',
    'cli',
    'documentation',
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
