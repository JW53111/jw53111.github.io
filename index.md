---
title: 首页 / Index
layout: default
---

# 欢迎来到我的主页 👋

这里是我的个人网站首页。

---

## 🕒 当前时间
<div id="time-box">⏰ 加载中...</div>

{% raw %}
<script>
// 显示当前时间（自动刷新）
function updateTime() {
  const now = new Date();
  document.getElementById("time-box").innerHTML =
    "⏰ 当前时间：" + now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();
</script>
{% endraw %}

---

## 📑 导航
- [留言 / Comments](/comments/)
- [归档 / Archive](/archive/)
- [标签 / Tags](/tags/)
- [简历 / Resume](/resume/)
- [GitHub](https://github.com/JW53111)
