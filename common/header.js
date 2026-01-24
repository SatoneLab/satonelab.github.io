document.addEventListener("DOMContentLoaded", () => {
  fetch("https://satonelab.github.io/common/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
    });
});
