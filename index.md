---
title: 首页 / Index
layout: default
---

# 欢迎来到我的秘密空间
# Welcome to my Memory Garden

这里是我的个人网站，你可以在这里了解我。我会分享一些学习资料，也会记录一些游戏感想和碎碎念。本网站欢迎所有人，希望你能在这里找到你需要的内容。

This is my personal website. You can get to know me here and I will share some learning materials. In the spare time I will update some blogs about games that I finished. This website is open to everyone. I hope you have fun!

---

## 当前时间
<div id="time-box">⏰ 加载中...</div>

<script>
// 显示访问者本地时间（自动刷新）
function updateTime() {
  const now = new Date();
  document.getElementById("time-box").textContent =
    "⏰ 当前时间：" + now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();
</script>

---

## 📑 导航 / Navigation
- [留言 / Comments](/comments/)
- [归档 / Archive](/archive/)
- [标签 / Tags](/tags/)
- [简历 / Resume](/resume/)
- [GitHub](https://github.com/JW53111)

