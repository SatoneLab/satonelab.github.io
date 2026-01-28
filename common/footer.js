window.addEventListener("load", () => {
  const targets = document.querySelectorAll(".site-footer");
  if (!targets.length) return;

  targets.forEach(target => {
    fetch(`${BASE}/common/footer.html?v=${VERSION}`)
      .then(res => res.text())
      .then(html => target.innerHTML = html)
      .catch(err => console.error("Footer fetch error:", err));
  });
});