let items = document.getElementsByClassName("side-bar__menu-row");
let menuBtn = document.getElementsByClassName("menu-list-icon")[0];
let sideBar = document.getElementsByClassName("side-bar")[0];
Array.from(items).forEach((item, i) => {
  item.addEventListener("click", (e) => {
    activeTrigger(e);
  });
});

function activeTrigger(e) {
  Array.from(items).forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
}

menuBtn.addEventListener("click", () => {
  sideBar.classList.toggle("hide");
  sideBar.classList.toggle("expand");
});
