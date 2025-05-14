document.addEventListener("DOMContentLoaded", function () {
    const captchaTexto = document.getElementById("captchaTexto");
    const captchaInput = document.getElementById("captchaInput");
    const mensaje = document.getElementById("mensajeCaptcha");
    const form = document.getElementById("form-contacto");
  
    if (captchaTexto && captchaInput && mensaje && form) {
      function generarCaptcha() {
        const texto = Math.random().toString(36).substring(2, 8);
        captchaTexto.textContent = texto;
        captchaTexto.dataset.valor = texto;
      }
  
      generarCaptcha();
  
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const valor = captchaTexto.dataset.valor;
        if (captchaInput.value === valor) {
          mensaje.textContent = "Captcha correcto ✅";
          mensaje.style.color = "green";
        } else {
          mensaje.textContent = "Captcha incorrecto ❌";
          mensaje.style.color = "red";
        }
      });
    }
  });
  