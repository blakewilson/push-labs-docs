module.exports = {
  title: "Push Labs Docs",
  url: "https://docs.pushlabs.co",
  baseUrl: "/",
  favicon: "img/pushlabs_favicon.png",
  organizationName: "pushlabsco", // Usually your GitHub org/user name.
  projectName: "push-labs-docs", // Usually your repo name.
  plugins: [],
  themeConfig: {
    prism: {
      additionalLanguages: ['php']
    },
    navbar: {
      title: "Push Labs Docs",
      logo: {
        alt: "Push Labs Logo",
        src: "img/pushlabs_favicon.png",
      },
      items: [
        {
          to: "video-background/",
          label: "Video Background",
          position: "left",
        },
        {
          to: "video-background-pro/",
          label: "Video Background Pro",
          position: "left",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Push Labs",
          items: [
            {
              label: "My Account",
              href: "https://pushlabs.co/my-account",
            },
            {
              label: "My License Keys",
              href: "https://pushlabs.co/my-account/api-keys/",
            },
            {
              label: "My Orders",
              href: "https://pushlabs.co/my-account/orders/",
            },
            {
              label: "My Downloads",
              href: "https://pushlabs.co/my-account/api-downloads/",
            },
          ],
        },
        {
          title: "Video Background Pro",
          items: [
            {
              label: "License",
              href: "https://pushlabs.co/license/",
            },
            {
              label: "Recover License Key",
              href: "https://pushlabs.co/lost-license/",
            },
            {
              label: "Support",
              href: "mailto:blake@pushlabs.co?subject=Support for Video Background Pro&amp;body=Please describe the issue you are encountering with Video Background Pro. Please describe the issue you are encountering with Video Background Pro. Please include any images or screen casts if necessary.",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Contribute to these docs",
              href: "https://github.com/pushlabsco/push-labs-docs",
            },
            {
              label: "GitHub",
              href: "https://github.com/pushlabsco",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Push Labs`,
    },
    algolia: {
      appId: "MYTU9ATB19",
      apiKey: "71f87305187ed47b9abb083831759454",
      indexName: "pushlabs_docs",
      contextualSearch: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: "UA-81413905-2",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          showLastUpdateTime: true,
          editUrl: "https://github.com/pushlabsco/push-labs-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
