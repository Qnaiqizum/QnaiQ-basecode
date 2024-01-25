import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConfs";

export default defineConfig({
  base:'/qnaiqizum.gitee.io/',
  lastUpdated: true,
  srcDir: "./src",
  title: "QnaiQ的弹药库",
  description: "弹药库、后悔药、撒气小人",
  // head: [["link", { rel: "icon", href: "/favicon.ico" }]], // 添加网站图标
  themeConfig: {
    siteTitle: "QnaiQ的弹药库", //左上角的标题，默认与title一样
    logo: "/Meme1.png", //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    // 右上角导航栏
    nav: nav,
    // 侧边栏
    sidebar: sidebar,
    // 右侧锚点导航
    outline: {
      level: [1, 6],
      label: "目录",
    },
    //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  // 代码段显示行号
  markdown: {
    lineNumbers: true,
  },
});
