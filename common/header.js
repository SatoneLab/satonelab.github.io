window.addEventListener("load", () => {
  const target = document.getElementById("header");
  if (!target) return;
  fetch("/common/header.html?v=" + Date.now())
    .then(res => res.text())
    .then(html => target.innerHTML = html);
});