document.addEventListener("DOMContentLoaded", () => {
  const inputTexto = document.getElementById("captchaTextoInput");
  const mensajeTexto = document.getElementById("mensajeCaptchaTexto");

  const inputMath = document.getElementById("captchaMathInput");
  const mensajeMath = document.getElementById("mensajeCaptchaMath");

  const btnValidar = document.getElementById("validarCaptchas");
  const btnEnviar = document.getElementById("btnEnviar");
  const form = document.getElementById("formulario");

  // Inicializar captchas al cargar
  generarCaptchaTexto();
  generarCaptchaMath();

  btnValidar.addEventListener("click", () => {
    const textoValido = validarCaptchaTexto(inputTexto.value);
    const mathValido = validarCaptchaMath(inputMath.value);

    // Mensajes
    if (textoValido) {
      mensajeTexto.textContent = "✅ Texto correcto.";
      mensajeTexto.style.color = "green";
    } else {
      mensajeTexto.textContent = "❌ Texto incorrecto.";
      mensajeTexto.style.color = "red";
      generarCaptchaTexto();
    }

    if (mathValido) {
      mensajeMath.textContent = "✅ Cálculo correcto.";
      mensajeMath.style.color = "green";
    } else {
      mensajeMath.textContent = "❌ Resultado incorrecto.";
      mensajeMath.style.color = "red";
      generarCaptchaMath();
    }

    if (textoValido && mathValido) {
      console.log("✅ Ambos captchas aprobados.");
      btnEnviar.disabled = false;
    } else {
      btnEnviar.disabled = true;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente.");
    form.reset();
    mensajeTexto.textContent = "";
    mensajeMath.textContent = "";
    btnEnviar.disabled = true;
    generarCaptchaTexto();
    generarCaptchaMath();
  });
});
