const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
  navLinks.classList.toggle("show");
}

hamburgerMenu.addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navLinks.classList.remove("show");
  }
});

// Hent alle faner og deres tilsvarende indholdselementer
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// Lyt til klik på faner
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Skjul eller vis indholdet afhængigt af den aktuelle tilstand
    if (tabContents[index].classList.contains("active")) {
      tabContents[index].classList.remove("active");
    } else {
      // Skjul alt indhold
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Vis kun det valgte indhold
      tabContents[index].classList.add("active");
    }
  });
});

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
