document.addEventListener("DOMContentLoaded", () => {
inicializarMenu();
function inicializarMenu() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
      });
    }
  }
});