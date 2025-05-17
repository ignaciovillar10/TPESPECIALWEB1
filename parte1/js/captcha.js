document.addEventListener("DOMContentLoaded", () => {
  const captchaCanvas = document.getElementById("captchaCanvas");
  const captchaCanvasInput = document.getElementById("captchaCanvasInput");
  const mensajeCaptchaCanvas = document.getElementById("mensajeCaptchaCanvas");
  const form = document.getElementById("form-contacto");

  let captchaCanvasTexto = "";

  function generarCaptchaCanvas() {
    const caracteres = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
    captchaCanvasTexto = "";
    for (let i = 0; i < 6; i++) {
      captchaCanvasTexto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    const ctx = captchaCanvas.getContext("2d");
    ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
    ctx.fillStyle = "#f8f8f8";
    ctx.fillRect(0, 0, captchaCanvas.width, captchaCanvas.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";

    // Agregar ruido
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 150, Math.random() * 50, 1 + Math.random() * 2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillText(captchaCanvasTexto, 10, 35);
  }

  generarCaptchaCanvas();

  form.addEventListener("submit", (e) => {
    if (captchaCanvasInput.value.trim().toUpperCase() !== captchaCanvasTexto) {
      mensajeCaptchaCanvas.textContent = "❌ Captcha visual incorrecto.";
      mensajeCaptchaCanvas.style.color = "red";
      captchaCanvasInput.value = "";
      generarCaptchaCanvas();
      e.preventDefault();
    } else {
      mensajeCaptchaCanvas.textContent = "✅ Captcha visual correcto.";
      mensajeCaptchaCanvas.style.color = "green";
    }
  });
});
