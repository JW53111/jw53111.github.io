// assets/js/time.js

// 格式化日期：DD/MM/YYYY HH:mm:ss
function formatDateTime(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// 更新时间函数
function updateTime() {
  const now = new Date();
  const box = document.getElementById("time-box");
  if (box) {
    box.textContent = "⏰ 当前时间：" + formatDateTime(now);
  }
}

// 每秒刷新一次
setInterval(updateTime, 1000);
updateTime();
