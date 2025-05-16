document.addEventListener("DOMContentLoaded", () => {
  const captchaTexto = document.getElementById("captchaTexto");
  const captchaInput = document.getElementById("captchaInput");
  const mensajeCaptcha = document.getElementById("mensajeCaptcha");
  const form = document.getElementById("form-contacto");

  if (!captchaTexto || !captchaInput || !mensajeCaptcha || !form) {
    console.warn("Uno o más elementos del captcha no se encontraron en el DOM.");
    return;
  }

  // Función que genera un captcha aleatorio
  const generarCaptcha = () => {
    const texto = Math.random().toString(36).substring(2, 8);
    captchaTexto.textContent = texto;
    captchaTexto.dataset.valor = texto;
  };

  // Función que valida el captcha ingresado
  const validarCaptcha = () => {
    const valorIngresado = captchaInput.value.trim();
    const valorCorrecto = captchaTexto.dataset.valor;

    if (valorIngresado === valorCorrecto) {
      mostrarMensaje("Captcha correcto ✅", "green");
    } else {
      mostrarMensaje("Captcha incorrecto ❌", "red");
    }
  };

  // Función que muestra el mensaje de validación
  const mostrarMensaje = (texto, color) => {
    mensajeCaptcha.textContent = texto;
    mensajeCaptcha.style.color = color;
  };

  // Inicializar captcha al cargar la página
  generarCaptcha();

  // Manejador del envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarCaptcha();
  });
});
