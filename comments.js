// comments.js
document.addEventListener("DOMContentLoaded", function () {
  // 选中文章容器，根据你的主题可能是 .container 或 #wrap-content
  const article = document.querySelector(".container");
  if (!article) return;

  // 创建评论区
  const commentDiv = document.createElement("div");
  commentDiv.id = "comments-section";
  article.appendChild(commentDiv);

  // 创建留言列表
  const list = document.createElement("div");
  list.id = "comment-list";
  commentDiv.appendChild(list);

  // 创建输入框和按钮
  const input = document.createElement("textarea");
  input.id = "comment-input";
  input.placeholder = "写下你的留言...（本地缓存）";

  const btn = document.createElement("button");
  btn.id = "comment-submit";
  btn.textContent = "提交";

  commentDiv.appendChild(input);
  commentDiv.appendChild(btn);

  // 加载本地缓存
  const key = location.pathname + "_comments";
  let comments = JSON.parse(localStorage.getItem(key) || "[]");

  function renderComments() {
    list.innerHTML = "";
    comments.forEach((c, i) => {
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
