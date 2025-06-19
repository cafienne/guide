/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  // {
  //   caption: 'User1',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: '/img/docusaurus.svg',
  //   infoLink: 'https://www.facebook.com',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'CaseFabric Reference Guide' /* title for your website */,
  tagline: 'How to use CaseFabric, a CMMN based case engine',
  url: 'https://cafienne.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'casefabric-guide',
  organizationName: 'casefabric',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'index', label: 'Overview' },
    { doc: 'getting-started/overview', label: 'Getting Started' },
    { doc: 'cmmn/overview', label: 'CMMN' },
    { doc: 'ide/overview', label: 'CaseFabric IDE' },
    { doc: 'engine/overview', label: 'CaseFabric Engine' },
    { doc: 'extensions/overview', label: 'Extensions' },
    { doc: 'api/overview', label: 'API Reference' },
    { doc: 'mendix/overview', label: 'Mendix Add-On'},
    { doc: 'release/overview', label: 'Releases' }
  ],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  docsSideNavCollapsible: true,

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/casefabric.svg',
  footerIcon: 'img/favicon-32x32.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: 'rgb(46,49,145)',
    secondaryColor: '#2E3191'
  },

  /* custom fonts for website */
  // fonts: {
  //   myFont: [
  //     "SofiaProRegular",
  //     "SofiaProRegular"
  //   ],
  //   myOtherFont: [
  //     "SofiaProRegular",
  //     "SofiaProRegular"
  //   ]
  // },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' + new Date().getFullYear() + ' CaseFabric',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default'
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* Open Graph and Twitter card images */
  ogImage: 'favicon-32x32.png',
  twitterImage: 'favicon-32x32.png'

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
