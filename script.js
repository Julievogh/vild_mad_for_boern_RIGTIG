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
