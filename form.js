const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("email");
const cargo = document.getElementById("cargo");
const button = document.getElementById("button");
const form = document.getElementById("form");

let empleado = {
  nombre: "",
  apellido: "",
  correo: "",
  cargo: document.getElementById("cargo").value,
};
let sueldos = {
  jefe: 5000,
  analista: 4000,
  programador: 3000,
  soporte: 2000,
  asistente: 1500,
};
class Empleado {
  constructor(nombre, apellido, correo, cargo) {
    this.codigo = this.autogenerarCodigo();
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.cargo = cargo;
    this.sueldoBruto = this.sueldoBruto();
    this.sueldoNeto = this.sueldoNeto();
  }
  sueldoBruto() {
    let sueldoBruto = 0;
    for (const key in sueldos) {
      if (key === this.cargo) {
        sueldoBruto = sueldos[key];
      }
    }
    return sueldoBruto;
  }
  sueldoNeto() {
    let sueldoNeto = this.sueldoBruto * 0.8;
    return sueldoNeto;
  }
  autogenerarCodigo() {
    let codigo = "";
    const CARACTERES = "abcde0123456789";
    for (let i = 0; i < 5; i++) {
      codigo += CARACTERES.charAt(
        Math.floor(Math.random() * CARACTERES.length)
      );
    }
    return codigo;
  }
}
let errores = [];
nombre.addEventListener("input", (e) => {
  e.preventDefault();
  let dataNombre = nombre.value;
  const expReg = /^[A-Za-z\d$@$!%*?&]{2,14}$/;
  let nombreOk = expReg.test(dataNombre);

  if (nombreOk) {
    nombre.style.border = "2px solid #0f05";
    empleado.nombre = dataNombre;
    errores[0] = "";
  } else {
    nombre.style.border = "2px solid #f005";
    errores[0] = "Error en el nombre";
  }
});

apellido.addEventListener("input", (e) => {
  e.preventDefault();
  let dataApellido = apellido.value;
  const expReg = /^[A-Za-z\d$@$!%*?&]{3,14}$/;
  let apellidoOk = expReg.test(dataApellido);

  if (apellidoOk) {
    apellido.style.border = "2px solid #0f05";
    empleado.apellido = dataApellido;
    errores[1] = "";
  } else {
    apellido.style.border = "2px solid #f005";
    errores[1] = "Error en el apellido";
  }
});

correo.addEventListener("input", (e) => {
  e.preventDefault();
  let dataCorreo = correo.value;
  const expReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?/g;
  let correoOk = expReg.test(dataCorreo);

  if (correoOk) {
    correo.style.border = "2px solid #0f05";
    empleado.correo = dataCorreo;
    errores[2] = "";
  } else {
    correo.style.border = "2px solid #f005";
    errores[2] = "Error en el correo";
  }
});

cargo.addEventListener("input", (e) => {
  e.preventDefault();
  let dataCargo = cargo.value;
  empleado.cargo = dataCargo;
});

///-------------------

button.addEventListener("click", (e) => {
  e.preventDefault();
  let validarErrores = errores.every((err) => err === "");
  if (validarErrores) {
    let dbEmpleados = localStorage.getItem("bd")
      ? JSON.parse(localStorage.getItem("bd"))
      : [];
    const newEmpleado = new Empleado(
      empleado.nombre,
      empleado.apellido,
      empleado.correo,
      empleado.cargo
    );
    dbEmpleados.push(newEmpleado);
    localStorage.setItem("bd", JSON.stringify(dbEmpleados));
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    alert("datos guardados satisfactoriamente");
    return;
  }
  const p = document.createElement("p");
  p.textContent = errores.join("  ");
  form.append(p);
});
