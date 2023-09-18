const hamburger = document.querySelector(".hamburger");
const modal = document.querySelector(".bg-modal");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active")
    modal.classList.toggle("bg-modal-active")
    navbar.classList.toggle("navbar-active")
})


// Obtener una referencia al elemento
const miElemento = document.querySelector(".navbar")

// Agregar un evento de desplazamiento (scroll) al objeto window
window.addEventListener('scroll', () => {
    // Obtener la posición actual del scroll
    const scrollPosition = window.scrollY;
    console.log(scrollPosition)
    // Define la posición de scroll en la que deseas agregar o quitar la clase
    const posicionDeseada = 300; // Cambia esto según tu necesidad

    // Comprobar si la posición de scroll es mayor o igual a la posición deseada
    if (scrollPosition >= posicionDeseada) {
        // Si es así, agrega la clase
        miElemento.classList.add('navbar-active');
    } else {
        // Si no, quita la clase
        miElemento.classList.remove('navbar-active');
    }
});
