document.addEventListener("DOMContentLoaded", () => {
    const captchaTextoSpan = document.getElementById("captchaTexto");
    const captchaTextoInput = document.getElementById("captchaTextoInput");
    const mensajeCaptchaTexto = document.getElementById("mensajeCaptchaTexto");
    const form = document.getElementById("form-contacto");
  
    let captchaTextoGenerado = "";
  
    function generarCaptchaTexto() {
      const caracteres = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
      captchaTextoGenerado = "";
      for (let i = 0; i < 5; i++) {
        captchaTextoGenerado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      }
      captchaTextoSpan.textContent = captchaTextoGenerado;
    }
  
    generarCaptchaTexto();
  
    form.addEventListener("submit", (e) => {
      if (captchaTextoInput.value.trim().toUpperCase() !== captchaTextoGenerado) {
        mensajeCaptchaTexto.textContent = "❌ Captcha de texto incorrecto.";
        mensajeCaptchaTexto.style.color = "red";
        captchaTextoInput.value = "";
        generarCaptchaTexto();
        e.preventDefault();
      } else {
        mensajeCaptchaTexto.textContent = "✅ Captcha de texto correcto.";
        mensajeCaptchaTexto.style.color = "green";
      }
    });
  });
  