// breadcrumb.js
window.addEventListener("load", () => {
  const nav = document.querySelector(".breadcrumb");
  const dataTag = document.getElementById("breadcrumb-data");
  if (!nav || !dataTag) return;

  const items = JSON.parse(dataTag.textContent);
  const ol = document.createElement("ol");

  items.forEach((item, index) => {
    const li = document.createElement("li");

    if (index < items.length - 1 && item.url) {
      const a = document.createElement("a");

      // GASなら相対パスを絶対パスに変換
      let absHref = item.url;
      if (isGAS() && item.url.startsWith("/")) {
        absHref = `${BASE}${item.url}`;
      }

      a.href = absHref;
      a.textContent = item.name;

      // GASならクリック時に window.top.location.href を使う
      if (isGAS()) {
        a.addEventListener("click", e => {
          e.preventDefault();              // 通常のリンク遷移を防ぐ
          window.top.location.href = absHref; // 同じタブでURLを変更
        });
      }

      li.appendChild(a);
    } else {
      li.textContent = item.name;
      li.setAttribute("aria-current", "page");
    }

    ol.appendChild(li);
  });

  nav.appendChild(ol);
});
