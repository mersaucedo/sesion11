Para el ejercicio de hoy considerar lo siguiente:

    **PROYECTO**

    Crear una pagina web que tenga las siguientes secciones:
    Lista de empleados, formulario de registro, data empleado (navegables entre ellas)

    EJERCICIO1--------------------#0D3

    FORMULARIO DE REGISTRO:
    En el formulario de registro se debe poder ingresar los siguientes campos:
        nombre
        apellido
        correo
        cargo

    El formulario debe contener las validaciones correspondientes para cada campo:

    Nombre>  debe tener de dos caracteres a 14 caracteres
    Apellido>  debe tener de dos caracteres a 14 caracteres
    Correo>  las validaciones correspondientes(minimo @ y .). No se puede ingresar el mismo correo para dos usuarios diferentes.
    Cargo> Los cargos deben ser Jefe, Analista, Programador, Soporte y Asistente.

    Cuando se cumplan las validaciones y se haga el submit de la informacion, se debe crear una instancia de la clase Empleado, esta clase debe incluir:
    atributos: codigo, nombre, apellido, correo, cargo (el codigo es autogenerado y no debe repetirse)
    operaciones: sueldoBruto(), sueldoNeto().

    EJERCICIO2---------------------#00d

    LISTA DE EMPLEADOS:
    En la seccion de lista de empleados se debe crear una tabla con todos los empleados existentes:

    columnas: codigo, nombre, apellido, correo, sueldobruto, sueldoneto, dataempleado(link).

    Las columnas deben contener el feature de ordenarse de menor a mayor o de mayor a menor haciendo click en los encabezados.
    OJO: si se ha hecho click en un encabezado debe aparecer un icono de una flecha apuntando hacia arriba o hacia abajo segun como se haya organizado la columna. (si es de mas alto a mas bajo, la flecha debe apuntar hacia abajo)

    EJERCICIO3---------------------------#d00

    DATA EMPLEADO:

    En esta seccion se debe ver la informacion registrada por el empleado a manera de un profile del empleado con elementos del tipo input pero que no sean modificables. En la parte inferior del profile deben existir dos botones: "editar" y "guardar". Al hacer click en el icono de editar, los inputs deben volverse modificables y permitir que se cambie la informacion seleccionada. Luego se puede guardar la informacion en el mismo objeto haciendo click en el boton "guardar"

    ********
    let sueldos = {
        jefe: 5000,
        analista: 4000,
        programador: 3000,
        soporte: 2000,
        asistente: 1500,
    }

    sueldoBruto() segun el cargo debe consultar el objeto sueldos y retornar el sueldo que corresponde al cargo del empleado.

    sueldoNeto() el 80% del sueldoBruto.



Este Proyecto responsive, ha sido creado utilizando las siguientes tecnologias: HTML5 CSS JS BALSAMIQ

-Integrantes:
-Alfaro Nuñez, Edison Rafael
-Araujo Guevara, Joseph Axel
-Rodriguez Lucas, Antony Jeferson
-Saucedo Santos, Mercedes Yanet


-Fuente de letra:
-Montserrat

-Colores para los gradientes:
-#00ffff
-#b224ed
-#c850c0
-#7579ff
-#ffdc3e
-colores solidos:
-#fff
-#4558d0
-#d31336
-#0e1c36

-Fuente de letra:
-4.7em
-2em
-1.7em
-1.3em
-1em

Formato de imagenes:
-png
-jpg

Otros:
-link de fontAwesome(para los icinos)
-link de GoogleFonts(para la fuentes de letra)
