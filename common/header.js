window.addEventListener("load", () => {
  const targets = document.querySelectorAll(".site-header");
  if (!targets.length) return;

  targets.forEach(target => {
    fetch(`${BASE}/common/header.html?v=` + Date.now())
      .then(res => res.text())
      .then(html => target.innerHTML = html)
      .catch(err => console.error("Header fetch error:", err));
  });
});