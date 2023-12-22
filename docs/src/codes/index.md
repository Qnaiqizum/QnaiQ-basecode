# Markdown+vitepress

## Markdown 扩展语法

::: info 信息框
信息框 info.
:::

::: tip 提示框
提示框 tip.
:::

::: warning 警告框
警告框 warning.
:::

::: danger 危险框
危险框 danger.
:::

::: details 详情框
详情框 details.
:::

<!-- 代码组 -->

::: code-group

```js:no-line-numbers {1} [代码片段1]
export default {
  data() {
    return {
      msg: "高亮!", // [!code highlight]
      msg: "聚焦!", // [!code focus]
      msg: "删减!", // [!code --]
      msg: "新增!", // [!code ++]
      msg: "错误!", // [!code error]
      msg: "警告!", // [!code warning]
    };
  },
};
```

<!-- 导入代码片段，数字为高亮字段 -->

<<< @/index.md{3} [代码片段 2]
:::

## 导入 md 文件

<!--@include: ./parts/index.md{1,3}-->

## 数据加载

<script setup>
import {data} from './codes.data.ts'
import home from './components/test.vue';
</script>

引入一个.data.js 文件中的数据

<pre>{{ data }}</pre>

## 自定义组件

<!-- 自定义组件 -->
<home />
