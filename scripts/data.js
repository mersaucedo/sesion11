import { Empleados } from "./classEmpleados.js";

let empleados = new Empleados();

let valores = window.location.search;
let params = new URLSearchParams(valores);
let codigo = params.get("codigo");

let formEditable = false;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cargo = document.getElementById("cargo");
let empleado = empleados.mostrarEmpleadoPorCodigo(codigo);
nombre.value = empleado.nombre;
apellido.value = empleado.apellido;
correo.value = empleado.correo;
cargo.value = empleado.cargo;

let btnEditar = document.getElementById("editar");
let btnGuardar = document.getElementById("guardar");

btnEditar.addEventListener("click", () => {
  formEditable = !formEditable;
  if (formEditable) {
    btnGuardar.disabled = false;
    btnEditar.disabled = true;
    nombre.disabled = false;
    apellido.disabled = false;
    correo.disabled = false;
    cargo.disabled = false;
  }
});
btnGuardar.addEventListener("click", () => {
  formEditable = !formEditable;
  if (!formEditable) {
    btnGuardar.disabled = true;
    btnEditar.disabled = false;
    nombre.disabled = true;
    apellido.disabled = true;
    correo.disabled = true;
    cargo.disabled = true;
  }
  let data = {
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value,
    cargo: cargo.value,
  };
  let emps = empleados.editarEmpleados(codigo, data);
  console.log(emps);
});
