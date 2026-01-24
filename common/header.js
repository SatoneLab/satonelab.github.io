// header.js
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("header");
  if (!target) return;

  fetch("https://satonelab.com/common/header.html?v=" + Date.now())
    .then(res => res.text())
    .then(html => {
      target.innerHTML = html;
    })
    .catch(err => console.error("header fetch error:", err));
});
