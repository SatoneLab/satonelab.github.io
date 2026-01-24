document.addEventListener("DOMContentLoaded", () => {
  fetch("https://satonelab.com/common/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
    });
});
