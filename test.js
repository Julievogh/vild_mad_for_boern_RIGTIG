// script.js
const boxes = document.querySelectorAll(".box");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function showBox(index) {
  boxes.forEach((box) => box.classList.remove("active"));
  boxes[index].classList.add("active");
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
  showBox(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % boxes.length;
  showBox(currentIndex);
});

// Show the first box by default on small screens
showBox(currentIndex);
