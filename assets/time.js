// assets/js/time.js

// 更新时间函数
function updateTime() {
  const now = new Date();
  const box = document.getElementById("time-box");
  if (box) {
    box.textContent = "⏰ 当前时间：" + now.toLocaleString();
  }
}

// 每秒刷新一次
setInterval(updateTime, 1000);
updateTime();
