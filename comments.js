document.addEventListener("DOMContentLoaded", function () {
  const commentDiv = document.getElementById("comments-section");
  if (!commentDiv) return;

  // 标题
  const title = document.createElement("h2");
  title.textContent = "💬 评论区";
  commentDiv.appendChild(title);

  // 评论列表
  const list = document.createElement("div");
  list.id = "comment-list";
  commentDiv.appendChild(list);

  // 昵称输入框
  const nicknameInput = document.createElement("input");
  nicknameInput.id = "nickname-input";
  nicknameInput.placeholder = "请输入昵称";
  nicknameInput.value = localStorage.getItem("nickname") || "";

  // 评论输入框
  const input = document.createElement("textarea");
  input.id = "comment-input";
  input.placeholder = "写下你的留言...（本地缓存）";

  // 提交按钮
  const btn = document.createElement("button");
  btn.id = "comment-submit";
  btn.textContent = "提交";

  commentDiv.appendChild(nicknameInput);
  commentDiv.appendChild(input);
  commentDiv.appendChild(btn);

  // 本地缓存 key
  const key = location.pathname + "_comments";
  let comments = JSON.parse(localStorage.getItem(key) || "[]");

  function renderComments() {
    list.innerHTML = "";
    comments.forEach(c => {
      const div = document.createElement("div");
      div.className = "comment-item";

      const author = document.createElement("strong");
      author.textContent = c.nickname + ": ";

      const text = document.createElement("span");
      text.textContent = c.text;

      div.appendChild(author);
      div.appendChild(text);
      list.appendChild(div);
    });
  }

  renderComments();

  btn.addEventListener("click", function () {
    const nickname = nicknameInput.value.trim() || "匿名";
    const text = input.value.trim();
    if (!text) return;

    localStorage.setItem("nickname", nickname);

    comments.push({ nickname, text });
    localStorage.setItem(key, JSON.stringify(comments));

    input.value = "";
    renderComments();
  });
});


