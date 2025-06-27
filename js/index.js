function load_internal_page(page) {
    window.location.href = `${page}`;
}

function load_mda_homepage() {
    window.location.replace("https://www.mda.org/");
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});