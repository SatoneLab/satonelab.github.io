// ページ読み込み完了後に実行
window.addEventListener("load", () => {

  // サイトヘッダーの要素を取得
  const targets = document.querySelectorAll(".site-header");
  if (!targets.length) return; // ヘッダーがなければ処理を中止

  // --- ヘッダー用 CSS を head に追加 ---
  const headerCss = document.createElement("link");
  headerCss.rel = "stylesheet";
  headerCss.href = `${BASE}/css/header.css?v=${VERSION}`; // キャッシュ回避のためバージョン付与
  document.head.appendChild(headerCss);

  // --- 各ヘッダー要素に HTML を fetch して挿入 ---
  targets.forEach(target => {
    fetch(`${BASE}/common/header.html?v=${VERSION}`)
      .then(res => res.text())
      .then(html => {
        target.innerHTML = html;

        // GAS環境ならリンクと画像を絶対パスに変換
        if (isGAS()) {
          const links = target.querySelectorAll("a[href^='/']");
          links.forEach(a => {
            const absHref = `${BASE}${a.getAttribute("href")}`;
            a.href = absHref;

            // クリック時に強制遷移させる
            a.addEventListener("click", (e) => {
              e.preventDefault();          // 元のリンク動作を止める
              window.top.location.href = absHref;  // ブラウザで遷移
            });
          });

          const imgs = target.querySelectorAll("img[src^='/']");
          imgs.forEach(img => {
            img.src = `${BASE}${img.getAttribute("src")}`;
          });
        }
      })
      .catch(err => console.error("Header fetch error:", err));
  });
});
