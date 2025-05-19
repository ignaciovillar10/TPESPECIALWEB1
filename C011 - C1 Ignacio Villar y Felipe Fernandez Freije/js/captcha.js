let resultadoCorrecto = 0;

function generarCaptchaMath() {
  const canvasMath = document.getElementById("captchaCanvasMath");
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  const operador = ["+", "-", "*"][Math.floor(Math.random() * 3)];
  resultadoCorrecto = eval(`${num1} ${operador} ${num2}`);

  const ctx = canvasMath.getContext("2d");
  ctx.clearRect(0, 0, canvasMath.width, canvasMath.height);
  ctx.fillStyle = "#eef";
  ctx.fillRect(0, 0, canvasMath.width, canvasMath.height);
  ctx.font = "24px sans-serif";
  ctx.fillStyle = "#000";
  ctx.fillText(`${num1} ${operador} ${num2} = ?`, 10, 35);
}

function validarCaptchaMath(input) {
  return parseInt(input.trim()) === resultadoCorrecto;
}
