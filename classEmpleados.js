export class Empleados {
  constructor() {}
  listarEmpleados() {
    let empleados = localStorage.getItem("bd")
      ? JSON.parse(localStorage.getItem("bd"))
      : [];
    return empleados;
  }
  editarEmpleados(codigo, data = {}) {
    let empleados = JSON.parse(localStorage.getItem("bd"));
    let empleado = empleados.find((emp) => emp.codigo == codigo);
    data.sueldoBruto = this.calSueldoBruto(data.cargo);
    data.sueldoNeto = this.calSueldoBruto(data.cargo) * 0.8;
    empleado = { ...empleado, ...data };
    let newEmpleados = empleados.map((emp) => {
      if (emp.codigo == codigo) {
        return empleado;
      }
      return emp;
    });
    localStorage.setItem("bd", JSON.stringify(newEmpleados));
    return newEmpleados;
  }
  mostrarEmpleadoPorCodigo(codigo) {
    let empleados = JSON.parse(localStorage.getItem("bd"));
    let empleado = empleados.find((emp) => emp.codigo == codigo);
    return empleado;
  }
  calSueldoBruto(cargo) {
    let sueldoBruto = 0;
    switch (cargo) {
      case "jefe":
        sueldoBruto = 5000;
        break;
      case "analista":
        sueldoBruto = 4000;
        break;
      case "programador":
        sueldoBruto = 3000;
        break;
      case "soporte":
        sueldoBruto = 2000;
        break;
      case "asistente":
        sueldoBruto = 1500;
        break;
      default:
        alert("error");
        break;
    }
    return sueldoBruto;
  }
}
