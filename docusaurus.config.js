/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'midohree',
  tagline: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  url: 'https://github.com/midohree/publog',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'midohree', // Usually your GitHub org/user name.
  projectName: 'publog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'midohree.com',
      items: [
        {to: '/', label: 'Blog', position: 'left'},
      ],
    },
    prism: {
      additionalLanguages: ['javascript', 'jsx'],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          editUrl:
            'https://github.com/midohree/publog/tree/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
