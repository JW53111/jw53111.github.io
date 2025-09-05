(function() {
  const postId = window.location.pathname; // 每篇文章唯一标识
  const commentsKey = 'comments-' + postId;

  function loadComments() {
    const comments = JSON.parse(localStorage.getItem(commentsKey) || '[]');
    const listEl = document.getElementById('comments-list');
    listEl.innerHTML = '';
    comments.forEach(c => {
      const div = document.createElement('div');
      div.className = 'comment';
      div.innerHTML = `<div class="comment-author">${c.author}</div><div class="comment-text">${c.text}</div>`;
      listEl.appendChild(div);
    });
  }

  function addComment(author, text) {
    const comments = JSON.parse(localStorage.getItem(commentsKey) || '[]');
    comments.push({ author, text });
    localStorage.setItem(commentsKey, JSON.stringify(comments));
    loadComments();
  }

  // 构建评论区 HTML
  const section = document.getElementById('comments-section');
  section.innerHTML = `
    <h3>留言区</h3>
    <div id="comments-list"></div>
    <form id="comment-form">
      <input type="text" id="comment-author" placeholder="你的名字" required>
      <textarea id="comment-text" placeholder="你的评论" required></textarea>
      <button type="submit">提交</button>
    </form>
  `;

  document.getElementById('comment-form').addEventListener('submit', function(e){
    e.preventDefault();
    const author = document.getElementById('comment-author').value.trim();
    const text = document.getElementById('comment-text').value.trim();
    if(author && text){
      addComment(author, text);
      this.reset();
    }
  });

  loadComments();
})();
