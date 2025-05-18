let textoCorrecto = "";

function generarCaptchaTexto() {
  const canvasTexto = document.getElementById("captchaCanvasTexto");
  const caracteres = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  textoCorrecto = "";
  for (let i = 0; i < 6; i++) {
    textoCorrecto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  const ctx = canvasTexto.getContext("2d");
  ctx.clearRect(0, 0, canvasTexto.width, canvasTexto.height);
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvasTexto.width, canvasTexto.height);
  ctx.font = "28px monospace";
  ctx.fillStyle = "#000";
  ctx.fillText(textoCorrecto, 10, 35);
}

function validarCaptchaTexto(input) {
  return input.trim().toUpperCase() === textoCorrecto;
}
