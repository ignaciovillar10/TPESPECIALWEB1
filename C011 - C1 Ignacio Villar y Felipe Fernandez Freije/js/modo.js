document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("modoBtn");

  if (boton) {
    boton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      boton.textContent = document.body.classList.contains("light-mode")
        ? "Cambiar a modo oscuro"
        : "Cambiar a modo claro";
    });
  }
});
