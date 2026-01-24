// footer.js
window.addEventListener("load", () => {
  const target = document.getElementById("footer");
  if (!target) return;

  fetch("/common/footer.html?v=" + Date.now())
    .then(res => res.text())
    .then(html => target.innerHTML = html)
    .catch(err => console.error("Footer fetch error:", err));
});
