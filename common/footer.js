// ページ読み込み完了後に実行
window.addEventListener("load", () => {

  // サイトフッターの要素を取得
  const targets = document.querySelectorAll(".site-footer");
  if (!targets.length) return;                              // フッターがなければ処理を中止

  // --- フッター用 CSS を footer.html の head に追加 ---
  const footerCss = document.createElement("link");
  footerCss.rel = "stylesheet";
  footerCss.href = `${BASE}/css/footer.css?v=${VERSION}`;   // キャッシュ回避のためバージョン付与
  document.head.appendChild(footerCss);
  
  // --- 各ヘッダー要素に HTML を fetch して挿入 ---
  targets.forEach(target => {
    fetch(`${BASE}/common/footer.html?v=${VERSION}`)
      .then(res => res.text())
      .then(html => target.innerHTML = html)                      // fetch した HTML を挿入
      .catch(err => console.error("Footer fetch error:", err));   // エラー時はコンソールに出力
  });
});