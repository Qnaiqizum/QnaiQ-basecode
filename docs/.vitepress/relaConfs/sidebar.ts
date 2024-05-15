import { DefaultTheme } from "vitepress";
// 侧边栏配置
export const sidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "知识库",
      collapsed: false, //true 默认折叠
      items: [
        { text: "代码小记", link: "/codesLib/" },
        {
          text: "知识库",
          link: "/knowledgeLib/h5c3Base",
          items: [
            { text: "H5C3基础", link: "/knowledgeLib/h5c3Base" },
            { text: "JS基础", link: "/knowledgeLib/jsBase" },
            { text: "vue基础", link: "/knowledgeLib/vueBase" },
          ],
        },
      ],
    },
    {
      text: "方法库",
      collapsed: false,
      items: [{ text: "浏览器忽略密码", link: "/functionsLib/" }],
    },
    {
      text: "组件库",
      collapsed: false,
      items: [{ text: "文件预览", link: "/componentsLib/" }],
    },
  ],
};
