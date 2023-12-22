---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
const { site, theme, page, frontmatter } = useData()
</script>
<pre>{{ frontmatter }}</pre>
