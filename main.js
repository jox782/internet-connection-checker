let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let reloadBtn = document.querySelector(".reload");

window.onload = function () {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};

window.addEventListener("online", function () {
  online();
});

window.addEventListener("offline", function () {
  offline();
});

reloadBtn.onclick = function () {
  window.location.reload();
};

function online() {
  title.innerHTML = "Online Now";
  title.style.color = "green";
  ul.classList.add("hide");
  reloadBtn.classList.add("hide");
}

function offline() {
  title.innerHTML = "Offline Now";
  title.style.color = "#666";
  ul.classList.remove("hide");
  reloadBtn.classList.remove("hide");
}
