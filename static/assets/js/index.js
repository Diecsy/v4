const form = document.querySelector("form");
const input = document.querySelector("input");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if !(typeof document.cookie == "number"){
  document.cookie = "cookie="+ getRandomInt(1e9) + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  alert(document.cookie);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  window.navigator.serviceWorker.register("/lab.js", {
    scope: '/assignments/',
  }).then(() => {
    let url = input.value.trim();
    if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
    else if (!(url.startsWith("https://") || url.startsWith("http://"))) url = "http://" + url;
    localStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
    location.href = "/mastery";
  });
});

function isUrl(val = "") {
  if (/^http(s?):\/\//.test(val) || (val.includes(".") && val.substr(0, 1) !== " ")) return true;
  return false;
}
