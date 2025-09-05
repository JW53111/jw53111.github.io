// comments.js
document.addEventListener("DOMContentLoaded", function () {
  // 兼容 WuK 主题常见文章容器
  const article = document.querySelector(".container, #wrap-content");
  if (!article) return;

  // 创建评论区
  const commentDiv = document.createElement("div");
  commentDiv.id = "comments-section";
  article.appendChild(commentDiv);

  // 评论列表
  const list = document.createElement("div");
  list.id = "comment-list";
  commentDiv.appendChild(list);

  // 输入框
  const input = document.createElement("textarea");
  input.id = "comment-input";
  input.placeholder = "写下你的留言...（本地缓存）";
  commentDiv.appendChild(input);

  // 提交按钮
  const btn = document.createElement("button");
  btn.id = "comment-submit";
  btn.textContent = "提交";
  commentDiv.appendChild(btn);

  // 本地缓存 key
  const key = location.pathname + "_comments";
  let comments = JSON.parse(localStorage.getItem(key) || "[]");

  // 渲染函数
  function renderComments() {
    list.innerHTML = "";
    comments.forEach(c => {
      const div = document.createElement("div");
      div.className = "comment-item";
      div.textContent = c;
      list.appendChild(div);
    });
  }

  renderComments();

  // 提交事件
  btn.addEventListener("click", function () {
    const text = input.value.trim();
    if (!text) return;
    comments.push(text);
    localStorage.setItem(key, JSON.stringify(comments));
    input.value = "";
    renderComments();
  });
});
