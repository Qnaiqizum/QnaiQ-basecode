import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  title: "QnaiQ的弹药库",
  description: "弹药库、后悔药、撒气小人",
  head: [["link", { rel: "icon", href: "/Meme1.png" }]], // 添加网站图标
  themeConfig: {
    siteTitle: "QnaiQ的弹药库", //左上角的标题，默认与title一样
    logo: "/Meme1.png", //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    // 右上角导航栏
    nav: [
      { text: "主页", link: "/" },
      {
        text: "方法库",
        items: [
          //这种格式是有下拉菜单的版本
          { text: "浏览器忽略密码", link: "/articles/basic/index" }, //text代表每一项的名字，link是连接的位置
        ],
      },
      {
        text: "组件库",
        items: [{ text: "图片/文件预览", link: "/articles/basic/index" }],
      },
    ],
    sidebar: [
      {
        text: "例子1",
        collapsed: false, //默认是不是展开
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
