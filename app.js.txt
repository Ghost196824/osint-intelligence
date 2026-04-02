let caso = {};

function buscar() {

  let input = document.getElementById("input").value;

  caso = {
    objetivo: input,
    cuentas: ["juan_1987", "juan.ok", "juan_1987_real"],
    actividad: [
      "22:10 - Inicio de sesión",
      "22:30 - Publicación",
      "23:00 - Nueva conexión"
    ],
    riesgo: "MEDIO-ALTO",
    ia: "Patrón nocturno + múltiples identidades"
  };

  render();
}

function render() {

  document.getElementById("caso").innerHTML =
    "Objetivo: " + caso.objetivo;

  document.getElementById("perfil").innerHTML = `
    Usuario: ${caso.objetivo}<br>
    Riesgo: ${caso.riesgo}
  `;

  document.getElementById("alertas").innerHTML =
    "🔴 Múltiples cuentas detectadas<br>🟠 Actividad sospechosa";

  document.getElementById("timeline").innerHTML =
    caso.actividad.join("<br>");

  document.getElementById("ia").innerHTML =
    caso.ia;

  document.getElementById("network").innerHTML =
    caso.cuentas.join("<br>");
}

function generarInforme() {

  let texto = `
INFORME OSINT

OBJETIVO: ${caso.objetivo}

CUENTAS DETECTADAS:
${caso.cuentas.join("\n")}

ACTIVIDAD:
${caso.actividad.join("\n")}

RIESGO:
${caso.riesgo}

ANÁLISIS:
${caso.ia}

CONCLUSIÓN:
Se detecta actividad digital relevante.
`;

  let blob = new Blob([texto], { type: "text/plain" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "informe_osint.txt";
  a.click();
}