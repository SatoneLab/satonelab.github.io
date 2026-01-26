// footer.js
const BASE = isGAS() ? "https://satonelab.com" : "";  // 環境に応じて自動変更される

// 開いているページがGASかどうか判定する
function isGAS() {
  const host = window.location.hostname;
  // GAS の Web アプリは googleusercontent.com または script.google.com などのホストになる
  return host.includes("googleusercontent.com") || host.includes("script.google.com");
}

window.addEventListener("load", () => {
  const target = document.getElementById("footer");
  if (!target) return;

  fetch(`${BASE}/common/footer.html?v=` + Date.now())
    .then(res => res.text())
    .then(html => target.innerHTML = html)
    .catch(err => console.error("Footer fetch error:", err));
});
