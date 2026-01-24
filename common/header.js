function getBaseURL() {
  // GAS Webアプリは script.google.com 配下
  if (location.hostname.includes("script.google.com")) {
    return "https://satonelab.github.io";
  }
  // GitHub Pagesなど通常サイト
  return "";
}

function loadHTML(id, path) {
  const url = getBaseURL() + path;

  fetch(url)
    .then(res => res.text())
    .then(html => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    })
    .catch(err => {
      console.error("HTML load failed:", url, err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "/common/header.html");
  loadHTML("footer", "/common/footer.html");
});
