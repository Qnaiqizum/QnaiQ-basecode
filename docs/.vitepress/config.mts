import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConfs";

export default defineConfig({
  base: "/QnaiQ-codebase/",
  lastUpdated: true,
  srcDir: "./src",
  title: "QnaiQ的弹药库",
  description: "弹药库、后悔药、撒气小人",
  // head配置会添加到项目的head标签中
  head: [
    ["link", { rel: "icon", href: "/QnaiQ-codebase/favicon.ico" }], // 添加网站图标
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }], // 添加字体
    // ['link', { rel: 'stylesheet', href: 'https://xxx.com/static/layui/css/layui.css' }], // 添加css样式
    // ["script", { src: "https://xxx.com/sdk.js" }], // 添加js脚本
    // [
    //   "script",
    //   {},
    //   `
    // console.log('window', window);
    // console.log('document', document);
    // `,
    // ], // 添加js代码
  ],
  themeConfig: {
    siteTitle: "QnaiQ的弹药库", //左上角的标题，默认与title一样
    logo: "/favicon.ico", //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    // 右上角导航栏
    nav: nav,
    // 侧边栏
    sidebar: sidebar,
    // 右侧锚点导航
    outline: {
      level: [1, 6],
      label: "目录",
    },
    // 右侧侧边栏位置  boolean | "left" | undefined
    aside: true,
    //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // 搜索配置
    search: {
      provider: "local",
    },
    footer: {
      message: "根据个人许可证发布（不是）",
      copyright: "写着玩的，能有啥版权啊。",
    },
  },
  // 代码段显示行号
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  // 明暗切换 boolean | 'dark' | 'force-dark'
  appearance: true,
  // 删除url中的.html后缀
  cleanUrls: true,
});
