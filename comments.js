document.addEventListener("DOMContentLoaded", function () {
  // 找到插入评论的容器
  let container = document.getElementById("comments-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "comments-container";
    document.body.appendChild(container);
  }

  container.style.maxWidth = "700px";
  container.style.margin = "20px auto";
  container.style.padding = "20px";
  container.style.border = "1px solid #ccc";
  container.style.borderRadius = "8px";
  container.style.backgroundColor = "#f9f9f9";
  container.style.color = "#000";

  // HTML 结构
  container.innerHTML = `
    <h3>留言板</h3>
    <div id="comments-list" style="margin-bottom:15px;"></div>
    <textarea id="comment-input" rows="4" style="width:100%; padding:8px; margin-bottom:10px;" placeholder="输入你的留言..."></textarea>
    <button id="comment-btn" style="padding:8px 16px;">提交</button>
  `;

  const commentsList = document.getElementById("comments-list");
  const commentInput = document.getElementById("comment-input");
  const commentBtn = document.getElementById("comment-btn");

  const STORAGE_KEY = "blog_comments";

  // 读取留言
  function loadComments() {
    let comments = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    commentsList.innerHTML = comments.map(c => 
      `<div style="padding:8px; border-bottom:1px solid #ddd;">
        <strong>${c.time}</strong><br>
        ${c.text}
      </div>`).join("");
  }

  // 保存留言
  function saveComment(text) {
    const now = new Date();
    const time = now.toLocaleString();
    let comments = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    comments.push({ text, time });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    loadComments();
  }

  // 初次加载
  loadComments();

  // 点击事件
  commentBtn.addEventListener("click", function () {
    const text = commentInput.value.trim();
    if (text === "") return alert("留言不能为空！");
    saveComment(text);
    commentInput.value = "";
  });
});
