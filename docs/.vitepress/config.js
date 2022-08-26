const anchor = require("markdown-it-anchor");

export default {
  title: "Ibry",
  description: "Ibry is a simple and fast static site generator.",
  base: "/blog/",
  logo: "icon.png",
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: "with-subfolders",
  themeConfig: {
    siteTitle: "ibryang",
    logo: "/icon.png",
    outlineTitle: "在本页面",
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

 collapsed: true,
    socialLinks: [
      { icon: "github", name: "fdfdfd",link: "https://github.com/vuejs/vitepress" },
    ],
    nav: [
      { text: "Home", link: "/" },
      { text: "Foo", link: "/foo/" },
      { text: "Bar", link: "/bar/" },
    ],
    sidebar: [
      {
        text: "Foo",
       
        collapsible: true,
        collapsed: true,
        items: [
          { text: "One", link: "/foo/one" },
          { text: "Two", link: "/foo/two" },
        ],
      },
      {
        text: "AAAA",
        collapsed: false,
        collapsible: true,
        items: [
          { text: "One", link: "/foo/one" },
          { text: "Two", link: "/foo/two" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    // }
  },
  markdown: {
    lineNumbers: true,
  },
};
