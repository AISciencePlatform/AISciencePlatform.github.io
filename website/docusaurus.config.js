// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Design and Validation of a Multi-Arm AI Platform for Scientific Exploration',
  tagline: 'Murilo Marques Marinho, Juan José Quiroz-Omaña, and Kanako Harada.',
  url: 'https://aiscienceplatform.github.io/', 
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/harada_lab_logo2.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AISciencePlatform', // Usually your GitHub org/user name.
  projectName: 'AISciencePlatform.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AISciencePlatform/AISciencePlatform',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AISciencePlatform/AISciencePlatform',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/harada_lab_logo2.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Get started',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/AISciencePlatform',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Powered by',
            items: [
          
              {
                label: 'SmartArmStack',
                href: 'https://github.com/orgs/SmartArmStack/repositories',
              },
              {
                label: 'DQ Robotics',
                href: 'https://dqrobotics.github.io/',
              },
              {
                label: 'PyBind11',
                href: 'https://github.com/pybind/pybind11',
              },
              {
                label: 'Eigen',
                href: 'https://eigen.tuxfamily.org/index.php?title=Main_Page',
              },

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AISciencePlatform',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AISP. Built with Docusaurus.`,
        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
