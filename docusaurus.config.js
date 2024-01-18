// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IT as a Pro',
  tagline: 'Moderne IT mit Microsoft 365 und Azure',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://brave-forest-039205c03.4.azurestaticapps.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'

  baseUrl: '/WebApp/',
  trailingSlash: false,
  
  //   GitHub pages deployment config.
  //   If you aren't using GitHub pages, you don't need these.
  // organizationName: 'benjaminbuerk', // Usually your GitHub org/user name.
  // projectName: 'WebApp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          path: 'wiki',
          routeBasePath: 'wiki',
        },
        blog: {
          blogTitle: "",
          blogDescription: "",
          showReadingTime: false,
          path: 'podcast',
          routeBasePath: 'podcast',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/itasapro.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/itasapro.png',
        },
        // Links on the right side
        items: [
          {to: '/podcast', label: 'Podcast', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {to: '/About', label: 'About Me', position: 'left'},
          {to: '/LandingPage', label: 'Landing', position: 'left'},
          {
            href: 'https://www.linkedin.com/in/benjaminbuerk/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Wiki',
                to: '/wiki/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Wiki',
                to: '/wiki/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IT as a Pro. Built with Docusaurus. Hosted on Azure Static Web App`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
