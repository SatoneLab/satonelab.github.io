const BASE = isGAS() ? "https://satonelab.com" : ""; // 環境に応じて変更可
const VERSION = "2026-01-24";

// CSS 読み込み関数
function css(href, attrs = {}) {
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = href;
  Object.entries(attrs).forEach(([k,v]) => l.setAttribute(k,v));
  document.head.appendChild(l);
}

// JS 読み込み関数
function js(src, attrs = {}) {
  const s = document.createElement("script");
  s.src = src;
  s.defer = true;
  Object.entries(attrs).forEach(([k,v]) => s.setAttribute(k,v));
  document.head.appendChild(s);
}

function isGAS() {
  const host = window.location.hostname;
  // GAS の Web アプリは googleusercontent.com または script.google.com などのホストになる
  return host.includes("googleusercontent.com") || host.includes("script.google.com");
}

// DOM 完全準備後に共通リソースを読み込む
document.addEventListener("DOMContentLoaded", () => {

  // -----------------------
  // 共通CSS
  // -----------------------
  css(`${BASE}/css/base.css?v=${VERSION}`);
  css(`${BASE}/css/breadcrumb.css?v=${VERSION}`);
  css("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css", {
    crossorigin: "anonymous",
    referrerpolicy: "no-referrer"
  });
  css("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");

  // -----------------------
  // 共通JS
  // -----------------------
  js(`${BASE}/common/header.js?v=${VERSION}`);
  js(`${BASE}/common/footer.js?v=${VERSION}`);
  js(`${BASE}/common/breadcrumb.js?v=${VERSION}`);

  // -----------------------
  // 追加でAnalyticsなどもここにまとめられる
  // -----------------------
  js("https://cloud.umami.is/script.js", {"data-website-id": "104528c9-8d74-4f0e-8df5-e0306a4ee701"});

});