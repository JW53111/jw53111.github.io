// comments.js
document.addEventListener("DOMContentLoaded", function () {
  const article = document.querySelector(".post");
  if (!article) return;

  // 评论容器
  const commentDiv = document.getElementById("comments-section");

  // 评论列表
  const list = document.createElement("div");
  list.id = "comment-list";
  commentDiv.appendChild(list);

  // 输入框
  const input = document.createElement("textarea");
  input.id = "comment-input";
  input.placeholder = "写下你的留言...（仅本地保存）";
  commentDiv.appendChild(input);

  // 提交按钮
  const btn = document.createElement("button");
  btn.id = "comment-submit";
  btn.textContent = "提交";
  commentDiv.appendChild(btn);

  // 本地缓存 key
  const key = location.pathname + "_comments";
  let comments = JSON.parse(localStorage.getItem(key) || "[]");

  // 渲染
  function renderComments() {
    list.innerHTML = "";
    comments.forEach((c) => {
      const div = document.createElement("div");
      div.className = "comment-item";
      div.textContent = c;
      list.appendChild(div);
    });
  }
  renderComments();

  // 绑定提交事件
  btn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;
    comments.push(text);
    localStorage.setItem(key, JSON.stringify(comments));
    input.value = "";
    renderComments();
  });
});
