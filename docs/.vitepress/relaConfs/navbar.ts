import { DefaultTheme } from "vitepress";

// 右上角导航栏配置
export const nav: DefaultTheme.NavItem[] = [
  { text: "主页", link: "/" },
  {
    text: "方法库",
    items: [
      //这种格式是有下拉菜单的版本
      { text: "浏览器忽略密码", link: "/functions/" }, //text代表每一项的名字，link是连接的位置
    ],
  },
  {
    text: "组件库",
    items: [{ text: "图片/文件预览", link: "/components/" }],
  },
];
