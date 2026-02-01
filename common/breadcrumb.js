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
      if (isGAS() && item.url.startsWith("/")) {
        a.href = `${BASE}${item.url}`;
      } else {
        a.href = item.url;
      }

      a.textContent = item.name;
      li.appendChild(a);
    } else {
      li.textContent = item.name;
      li.setAttribute("aria-current", "page");
    }

    ol.appendChild(li);
  });

  nav.appendChild(ol);
});