// comments.js
document.addEventListener("DOMContentLoaded", () => {
  // 自动在文章内容底部插入评论容器
  const postContent = document.querySelector(".markdown-body, .post-content, .container"); 
  if (!postContent) return;

  const container = document.createElement("div");
  container.id = "comments-container";
  postContent.appendChild(container);

  const storageKey = location.pathname + "-comments";

  container.innerHTML = `
    <h3>留言板</h3>
    <form id="comment-form">
      <input type="text" id="comment-name" placeholder="昵称" required style="width:100%;padding:6px;margin-bottom:6px;">
      <textarea id="comment-content" placeholder="写下你的留言..." required style="width:100%;padding:6px;margin-bottom:6px;"></textarea>
      <button type="submit">提交</button>
    </form>
    <div id="comment-list"></div>
  `;

  const form = document.getElementById("comment-form");
  const list = document.getElementById("comment-list");

  const loadComments = () => {
    const comments = JSON.parse(localStorage.getItem(storageKey) || "[]");
    list.innerHTML = comments.map(c => `
      <div class="comment-item">
        <strong>${c.name}</strong> <span class="comment-time">${c.time}</span>
        <p>${c.content}</p>
      </div>
    `).join("");
  };

  loadComments();

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("comment-name").value.trim();
    const content = document.getElementById("comment-content").value.trim();
    if (!name || !content) return;

    const comments = JSON.parse(localStorage.getItem(storageKey) || "[]");
    comments.push({
      name,
      content,
      time: new Date().toLocaleString()
    });
    localStorage.setItem(storageKey, JSON.stringify(comments));

    form.reset();
    loadComments();
  });
});
