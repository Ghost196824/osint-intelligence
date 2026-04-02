let caso = {};

function buscar() {

  let input = document.getElementById("input").value;

  if (!input) {
    alert("Ingresá un dato para analizar");
    return;
  }

  // Simulación OSINT (después lo conectamos real)
  caso = {
    objetivo: input,
    cuentas: ["juan_1987", "juan.ok", "juan_real"],
    actividad: [
      "22:10 - Login detectado",
      "22:30 - Publicación",
      "23:05 - Nueva conexión"
    ],
    riesgo: "MEDIO-ALTO",
    ia: "Patrón nocturno + múltiples cuentas detectadas"
  };

  render();
}

function render() {

  document.getElementById("caso").innerHTML =
    "<b>Objetivo:</b> " + caso.objetivo;

  document.getElementById("perfil").innerHTML = `
    <b>Usuario:</b> ${caso.objetivo}<br>
    <b>Riesgo:</b> ${caso.riesgo}
  `;

  document.getElementById("alertas").innerHTML =
    "🔴 Múltiples cuentas detectadas<br>🟠 Actividad sospechosa";

  document.getElementById("timeline").innerHTML =
    caso.actividad.join("<br>");

  document.getElementById("ia").innerHTML =
    caso.ia;

  document.getElementById("network").innerHTML =
    caso.cuentas.map(c => "• " + c).join("<br>");
}

function generarInforme() {

  let texto = `
INFORME OSINT

OBJETIVO: ${caso.objetivo}

CUENTAS:
${caso.cuentas.join("\n")}

ACTIVIDAD:
${caso.actividad.join("\n")}

RIESGO:
${caso.riesgo}

CONCLUSIÓN:
Se detecta actividad digital relevante.
`;

  let blob = new Blob([texto], { type: "text/plain" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "informe_osint.txt";
  a.click();
}