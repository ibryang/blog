const anchor = require("markdown-it-anchor");

export default {
  title: "ibryang",
  description: "一个简简单单的博客, 用于记录生活和学习",
  base: "/blog/",
  logo: "icon.png",
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: "with-subfolders",
  themeConfig: {
    siteTitle: "ibryang",
    logo: "/icon.png",
    outlineTitle: "在本页面",
    lastUpdatedText: "更新时间",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    collapsed: true,
    socialLinks: [{ icon: "github", link: "https://github.com/ibryang" }],
    nav: [
      { text: "Home", link: "/" },
      { text: "Golang", link: "/golang/" },
      { text: "Python", link: "/python/" },
      { text: "Vuejs", link: "/vuejs/" },
      { text: "服务器", link: "/server/" },
    ],
    sidebar: {
      "/golang/": [
        {
          text: "学习笔记",
          collapsible: true,
          collapsed: true,
          items: [
            { text: "常用打包命令", link: "/golang/learn/打包命令" },
            {
              text: "获取文本具体宽高",
              link: "/golang/learn/获取文本具体宽高",
            },
          ],
        },
      ],
      "/python/": [],
      "/vuejs/": [
        {
          text: "工作中遇到的问题",
          collapsible: true,
          collapsed: true,
          items: [
            { text: "html设置吸顶操作", link: "/vuejs/issue/html设置吸顶操作" },
            {
              text: "解决node12 安装node-sass失败问题",
              link: "/vuejs/issue/解决node12 安装node-sass失败问题",
            },
          ],
        },
        {
          text: "学习笔记",
          collapsible: true,
          collapsed: true,
          items: [{ text: "使用淘宝镜像", link: "/vuejs/learn/使用淘宝镜像" }],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Evan You",
    },
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    // }
  },
  markdown: {
    lineNumbers: true,
  },
};

// [
//   {
//     text: "Golang",
//     collapsible: true,
//     collapsed: true,
//     items: [
//       { text: "", link: "/foo/one" },
//       { text: "Two", link: "/foo/two" },
//     ],
//   },
//   {
//     text: "AAAA",
//     collapsed: false,
//     collapsible: true,
//     items: [
//       { text: "One", link: "/foo/one" },
//       { text: "Two", link: "/foo/two" },
//     ],
//   },
// ],
