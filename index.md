---
title: 首页 / Index
layout: default
menu: false  # 阻止首页进入菜单
---

# 欢迎来到我的秘密空间
# Welcome to my Memory Garden

这里是我的个人网站，你可以在这里了解我。我会分享一些学习资料，空闲时间也会发一些游戏感想和碎碎念。本网站欢迎所有人，希望你能在这里找到你需要的内容。

This is my personal website. You can get to know me here and I will share some learning materials. In my spare time, I will update some blogs about games that I finished. This website is opened to everyone. I hope you have fun!

---

## 当前时间
<div id="time-box">⏰ 加载中...</div>

{% raw %}
<script>
// 确保 DOM 完全加载后执行
window.addEventListener("DOMContentLoaded", function() {
  const box = document.getElementById("time-box");
  function updateTime() {
    const now = new Date();
    box.textContent = "⏰ 当前时间：" + now.toLocaleString();
  }
  updateTime();
  setInterval(updateTime, 1000);
});
</script>
{% endraw %}

---

## 📑 导航 / Navigation
- [留言 / Comments](/comments/)
- [归档 / Archive](/archive/)
- [标签 / Tags](/tags/)
- [简历 / Resume](/resume/)
- [GitHub](https://github.com/JW53111)

