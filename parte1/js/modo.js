document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("modoBtn");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (boton) {
    boton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      boton.textContent = document.body.classList.contains("light-mode")
        ? "Cambiar a modo oscuro"
        : "Cambiar a modo claro";
      
        boton.textContent = document.main.classList.contains("light-mode")        
      boton.textContent = document.header.classList.contains("light-mode")  
    });
  }

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("mostrar");
    });
  }
});