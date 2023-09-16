const hamburger = document.querySelector(".hamburger");
const modal = document.querySelector(".bg-modal");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active")
    modal.classList.toggle("bg-modal-active")
    navbar.classList.toggle("navbar-active")
})