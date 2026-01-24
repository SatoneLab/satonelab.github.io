// bootstrap.js
document.addEventListener("DOMContentLoaded", () => {
  const BASE = "https://satonelab.com";
  const VERSION = "2026-01-24";

  // CSS読み込み関数
  function css(href, attrs = {}) {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = href;
    Object.entries(attrs).forEach(([k,v]) => l.setAttribute(k,v));
    document.head.appendChild(l);
  }

  // JS読み込み関数
  function js(src, attrs = {}) {
    const s = document.createElement("script");
    s.src = src;
    s.defer = true;
    Object.entries(attrs).forEach(([k,v]) => s.setAttribute(k,v));
    document.head.appendChild(s);
  }

  // 共通CSS
  css(`${BASE}/css/base.css?v=${VERSION}`);
  css(`${BASE}/css/breadcrumb.css?v=${VERSION}`);
  css("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css", {
    crossorigin: "anonymous",
    referrerpolicy: "no-referrer"
  });

  // 共通JS
  js(`${BASE}/common/header.js?v=${VERSION}`);
  js(`${BASE}/common/footer.js?v=${VERSION}`);
  js(`${BASE}/common/breadcrumb.js?v=${VERSION}`);
});
