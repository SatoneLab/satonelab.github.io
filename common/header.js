document.addEventListener("DOMContentLoaded", () => {
  fetch("https://satonelab.com/common/header.html?v=" + Date.now())
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
    });
});
