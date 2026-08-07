let scrollContainer = document.querySelector(".gallery");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

let width = scrollContainer.getBoundingClientRect().width;

scrollContainer.addEventListener("wheel", (e) => {
  scrollContainer.scrollLeft += e.deltaY;
});
prev.addEventListener("click", () => {
  scrollContainer.scrollLeft -= width;
});
next.addEventListener("click", () => {
  scrollContainer.scrollLeft += width;
});
