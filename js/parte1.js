let users = [ {código: "", nombre: "Mercedes", apellido: "Sanchez", email: "",cargo: "veterinario", sueldo: 35},

const usuario = document

]
function crearNuevoElemento(arreglo){
    let attributes = Object.keys(arreglo[0])
    let newElement = {}

    for(const index in attributes){
        newElement[attributes[index]] = prompt(`Ingrese el ${attributes[index]}`)// newElement["codigo"]
    }
    arreglo.push(newElement)

    return arreglo
}

 //Crear una funcion que genere un correo electronico en base a el nombre y apellido del alumno.

function generarCodigo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
      let contador = 1
      arreglo[i].código = `${arreglo[i].nombre.charAt(0)}${
        arreglo[i].apellido}${contador+1}`.toLowerCase(); //aperez@mtpecertus.com
    }
    return arreglo
  }

// 3. Crear una funcion que permita crear un nuevo alumno pidiendo los datos a traves de un prompt al
// usuario. OJO: Recuerda que el correo es autogenerado. El profile_picture debe ser llenado con la api
// https://randomuser.me/api/portraits/{gender}/{number}.jpg. Para efectos del ejercicio, dos personas
// podrian compartir la misma foto de perfil.

// function crearNuevoAlumno() {
//     let nuevoAlumno = {
//       codigo: "",
//       nombre: "",
//       apellido: "",
//       profile_picture: "",
//       email: "",
//     };
  
//     for (const atr in nuevoAlumno) {
//       nuevoAlumno[atr] = prompt(`Ingrese el ${atr}`);
//     }
//     students.push(nuevoAlumno);
  
//     return students;
//   }

///...........................................index

const email = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const button = document.getElementById("regist");
const form = document.getElementById("form");

let parrafo = document.createElement("p");
form.append(parrafo);

let errores = [];

email.addEventListener("input", () => {
  let dataEmail = email.value;
  let expRegEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  let emailOk = expRegEmail.test(dataEmail);
  if (emailOk) {
    email.style.background = "#0616";
    errores[0] = "";
  } else if (dataEmail == "") {
    email.style.background = "none";
  } else {
    email.style.background = "#f116";
    errores[0] = "Error en el 'email' | ";
  }
});

telefono.addEventListener("input", (e) => {
  let dataTel = telefono.value;
  let expRegTel = /^9[0-9]{8}$/gm;
  let telOk = expRegTel.test(dataTel);

  if (telOk) {
    telefono.style.background = "#0616";
    errores[1] = "";
  } else if (dataTel == "") {
    email.style.background = "none";
  } else {
    telefono.style.background = "#f116";
    errores[1] = "Error en el 'telefono' | ";
  }
});

//-------------

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(errores);
  if (!errores.every((e) => e == "")) {
    parrafo.textContent = errores.join("");
    
  } else {
    parrafo.textContent = "Todo ok";
  }
});