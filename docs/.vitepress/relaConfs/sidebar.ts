import { DefaultTheme } from "vitepress";
// 侧边栏配置
export const sidebar: DefaultTheme.Sidebar = {
  codes: [
    {
      text: "第一部分",
      collapsed: false, //true 默认折叠
      items: [
        { text: "代码小记", link: "/codes/" },
        { text: "方法库", link: "/functions/" },
        { text: "组件库", link: "/components/" },
      ],
    },
    {
      text: "第二部分",
      collapsed: false,
      items: [
        { text: "代码小记", link: "/codes/" },
        { text: "方法库", link: "/functions/" },
        { text: "组件库", link: "/components/" },
      ],
    },
  ],
};
