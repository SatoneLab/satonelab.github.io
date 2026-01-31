// ページ読み込み完了後に実行
window.addEventListener("load", () => {

  // サイトヘッダーの要素を取得
  const targets = document.querySelectorAll(".site-header");
  if (!targets.length) return;                              // ヘッダーがなければ処理を中止

  // --- ヘッダー用 CSS を header.html の head に追加 ---
  const headerCss = document.createElement("link");
  headerCss.rel = "stylesheet";
  headerCss.href = `${BASE}/css/header.css?v=${VERSION}`;   // キャッシュ回避のためバージョン付与
  document.head.appendChild(headerCss);
  
  // --- 各ヘッダー要素に HTML を fetch して挿入 ---
  targets.forEach(target => {
    fetch(`${BASE}/common/header.html?v=${VERSION}`)
      .then(res => res.text())
      .then(html => target.innerHTML = html)                      // fetch した HTML を挿入
      .catch(err => console.error("Header fetch error:", err));   // エラー時はコンソールに出力
  });
});