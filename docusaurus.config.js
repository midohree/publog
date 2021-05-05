/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'midohree',
  tagline: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
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
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
