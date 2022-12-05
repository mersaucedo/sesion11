const container = document.querySelector(".container");

///body---------
let empleados = localStorage.getItem("bd")
  ? JSON.parse(localStorage.getItem("bd"))
  : [];

//crecion de la td

const tablaEmpleados = document.getElementById("tablita");

let tableBody = document.getElementById("tbody");

function renderizarTabla() {
  console.log(empleados.length);
  if (!empleados.length) {
    tableBody.innerHTML = `
    <tr>
      <td colspan="6" class="parrafo">Sin registros</td>
    </tr>
    `;
    return;
  }
  tableBody.innerHTML = empleados
    .map((emp) => {
      return `
    <tr class="tabla__body">
      <td>${emp.codigo}</td>
      <td>${emp.nombre}</td>
      <td>${emp.apellido}</td>
      <td>${emp.correo}</td>
      <td>${emp.sueldoBruto}</td>
      <td>${emp.sueldoNeto}</td>
      <td><a href="/data.html?codigo=${emp.codigo}" target="_blank" class="editperfil">🖊 Edit</a></td>
    </tr>
  `;
    })
    .join("");
}
renderizarTabla();
//header------
function ordenarPorColumna(columna = "", clase = "") {
  if (clase == "rotar") {
    switch (columna) {
      case columna:
        return empleados.sort((a, b) => {
          if (a[columna] < b[columna]) {
            return -1;
          } else if (a[columna] > b[columna]) {
            return 1;
          } else {
            return 0;
          }
        });
      default:
        alert("error");
        break;
    }
  } else {
    switch (columna) {
      case columna:
        return empleados.sort((a, b) => {
          if (b[columna] < a[columna]) {
            return -1;
          } else if (b[columna] > a[columna]) {
            return 1;
          } else {
            return 0;
          }
        });
      default:
        alert("error");
        break;
    }
  }
}
const ths = document.querySelectorAll(".tabla__header th");
ths.forEach((th) => {
  th.addEventListener("click", () => {
    th.classList.toggle("rotar");
    let clase = th.className;
    ordenarPorColumna(th.id, clase);
    renderizarTabla();
  });
});

//------------
