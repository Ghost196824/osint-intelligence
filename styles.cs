body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0b0f14;
  color: #d1d5db;
}

/* INICIO */
.inicio {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.inicio-container {
  text-align: center;
}

.inicio button {
  padding: 15px;
  font-size: 16px;
  background: #22c55e;
  border: none;
  cursor: pointer;
}

/* HEADER */
header {
  background: #111827;
  padding: 15px;
  border-bottom: 2px solid #1f2937;
}

header h1 {
  margin: 0;
  color: #22c55e;
}

/* LAYOUT */
.container {
  display: flex;
  height: calc(100vh - 70px);
}

.sidebar {
  width: 20%;
  background: #020617;
  padding: 10px;
}

.main {
  width: 60%;
  padding: 10px;
}

.right {
  width: 20%;
  background: #020617;
  padding: 10px;
}

/* PANELES */
.panel {
  background: #111827;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 6px;
}

h3 {
  margin-top: 0;
  color: #38bdf8;
}

/* INPUT */
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  background: #020617;
  border: 1px solid #374151;
  color: white;
}

button {
  width: 100%;
  padding: 10px;
  background: #1e293b;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #334155;
}

.btn-report {
  background: #22c55e;
  color: black;
  font-weight: bold;
}

/* BLOQUES */
#network {
  height: 150px;
  background: #020617;
}

#timeline, #alertas, #perfil, #ia {
  font-size: 14px;
}
.big {
  height: 250px;
}