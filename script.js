let items = document.getElementsByClassName("side-bar__menu-row");
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
