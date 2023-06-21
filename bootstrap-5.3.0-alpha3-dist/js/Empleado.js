class Empleado {

  constructor() {
    this.nombres = "";
    this.apellidos = "";
    this.sexo = "";
    this.fechaNacimiento = "";
    this.fechaIngreso = "";
    this.salario = 0;
    this.informacionAcademica = [];
  }

  getNombres() {
    return this.nombres;
  }

  setNombres(nombres) {
    this.nombres = nombres;
  }

  getApellidos() {
    return this.apellidos;
  }

  setApellidos(apellidos) {
    this.apellidos = apellidos;
  }

  getSexo() {
    return this.sexo;
  }

  setSexo(sexo) {
    this.sexo = sexo;
  }

  getFechaNacimiento() {
    return this.fechaNacimiento;
  }

  setFechaNacimiento(fechaNacimiento) {
    this.fechaNacimiento = fechaNacimiento;
  }

  getFechaIngreso() {
    return this.fechaIngreso;
  }

  setFechaIngreso(fechaIngreso) {
    this.fechaIngreso = fechaIngreso;
  }

  getSalario() {
    return this.salario;
  }

  setSalario(salario) {
    this.salario = salario;
  }

  getInformacionAcademica(indice) {
    return this.informacionAcademica[indice];
  }

  setInformacionAcademica(informacionAcademica) {
    this.informacionAcademica = informacionAcademica;
  }

  agregarInformacionAcademica(informacionAcademica) {
    this.informacionAcademica.push(informacionAcademica);
  }

  calcularEdad() {

    const fechaActual = new Date();
    const fechaNacimiento = new Date(this.fechaNacimiento);

    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;  // Se suma 1 porque los meses en JavaScript comienzan desde 0.
    const diaActual = fechaActual.getDate();

    const anioNacimiento = fechaNacimiento.getFullYear();
    const mesNacimiento = fechaNacimiento.getMonth() + 1;  // Se suma 1 porque los meses en JavaScript comienzan desde 0.
    const diaNacimiento = fechaNacimiento.getDate();

    let edadEmpleado = anioActual - anioNacimiento;

    if ((mesNacimiento > mesActual) || (mesNacimiento === mesActual && diaNacimiento > diaActual)) {
      edadEmpleado--;
    }

    return edadEmpleado;

  }

  calcularAntiguedad() {

    const fechaActual = new Date();
    const fechaIngreso = new Date(this.fechaIngreso);

    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;  // Se suma 1 porque los meses en JavaScript comienzan desde 0.
    const diaActual = fechaActual.getDate();

    const anioIngreso = fechaIngreso.getFullYear();
    const mesIngreso = fechaIngreso.getMonth() + 1;
    const diaIngreso = fechaIngreso.getDate();

    let antiguedadEmpleado = anioActual - anioIngreso;

    if ((mesIngreso > mesActual) || (mesIngreso === mesActual && diaIngreso > diaActual)) {
      antiguedadEmpleado--;
    }

    return antiguedadEmpleado;

  }

  toString() {
    return 'Nombres:             ' + empleado.getNombres() + '\n' +
      'Apellidos:           ' + empleado.getApellidos() + '\n' +
      'Sexo:                ' + empleado.getSexo() + '\n' +
      'Fecha de nacimiento: ' + empleado.getFechaNacimiento() + '\n' +
      'Fecha de ingreso:    ' + empleado.getFechaIngreso() + '\n' +
      'Salario:             ' + '$' + empleado.getSalario() + '\n';
  }

}


//Vista Inicio


let empleado = new Empleado(); //Clase empleado

function modificar() {

  if (
    document.getElementById('input-nombres').value != "" &&
    document.getElementById('input-apellidos').value != "" &&
    (document.getElementById('rad-femenino').checked == true || document.getElementById('rad-masculino').checked == true) &&
    document.getElementById('fecha-nacimiento').value != "" &&
    document.getElementById('fecha-ingreso').value != "" &&
    document.getElementById('salario').value != "") {

    empleado.setNombres(document.getElementById('input-nombres').value);
    empleado.setApellidos(document.getElementById('input-apellidos').value);
    empleado.setSexo(document.querySelector('input[name="radio-sexo"]:checked').value);
    empleado.setFechaNacimiento(document.getElementById('fecha-nacimiento').value);
    empleado.setFechaIngreso(document.getElementById('fecha-ingreso').value);
    empleado.setSalario(document.getElementById('salario').value);

    Swal.fire({
      title: 'Empleado registrado',
      html: '<pre>' + empleado.toString() + '</pre>',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup: 'format-pre'
      }
    });

  } else {
    Swal.fire({
      text: 'Campos incompletos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }

  console.log(empleado.getNombres());
  console.log(empleado.getApellidos());
  console.log(empleado.getSexo());
  console.log(empleado.getFechaNacimiento());
  console.log(empleado.getFechaIngreso());
  console.log(empleado.getSalario());

}

//Función para validar que los campos de tipo text no tengan numeros
function validateInput() {
  var input = document.getElementById("input-nombres").value;
  var input2 = document.getElementById("input-apellidos").value;
  var pattern = /^[a-zA-Z]+$/;

  if (!pattern.test(input) && !pattern.test(input2)) {
    // Si no se ingresaron solo letras, muestra un mensaje de error o toma alguna otra acción
    Swal.fire({
      text: 'El campo solo debe contener letras',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    // También puedes limpiar el campo de entrada si lo deseas
    document.getElementById("input-nombres").value = "";
    document.getElementById("input-apellidos").value = "";
  }
}

//Función para validar que los campos de institucion no tengan numeros
function validarIntitucion() {
  var input3 = document.getElementById("institucion").value;
  var pattern = /^[a-zA-Z]+$/;
  if (!pattern.test(input3)) {
    // Si no se ingresaron solo letras, muestra un mensaje de error o toma alguna otra acción
    Swal.fire({
      text: 'El campo solo debe contener letras',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    // También puedes limpiar el campo de entrada si lo deseas
    document.getElementById("institucion").value = "";
  }
}

//Función para el botón calcular edad
function calcularBotonEdad() {
  if (empleado.getFechaNacimiento() != '') {
    document.getElementById('input-edad').value = "Tiene " + empleado.calcularEdad() + " años";
  } else {
    Swal.fire({
      text: 'No se ha ingresado los datos del empleado',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}

//Función para el botón calcular la antiguedad del empleado
function calcularBotonAntiguedad() {
  if (empleado.getFechaIngreso() != '') {
    document.getElementById('input-antiguedad').value = "Tiene " + empleado.calcularAntiguedad() + " años de antigüedad";
  } else {
    Swal.fire({
      text: 'No se ha ingresado los datos del empleado',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}

//Función para el botón calcular la antiguedad las prestaciones
function calcularBotonPrestaciones() {
  let prestaciones = 0;
  if (empleado.getSalario() != 0) {
    prestaciones = (empleado.calcularAntiguedad() * empleado.getSalario()) / (12);
    document.getElementById('input-prestaciones').value = "$ " + prestaciones.toFixed(3);
  } else {
    Swal.fire({
      text: 'No se ha ingresado los datos del empleado',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}

//Información academica

function guardarInformacionAcademica() {
  if (
    document.getElementById('nivelacademico').value != '' &&
    document.getElementById('institucion').value != '' &&
    document.getElementById('titulo').value != ''
  ) {

    empleado.agregarInformacionAcademica(document.getElementById('nivelacademico').value);
    empleado.agregarInformacionAcademica(document.getElementById('institucion').value);
    empleado.agregarInformacionAcademica(document.getElementById('titulo').value);

    Swal.fire({
      title: 'Información acádemica',
      html: '<pre>' +
        'Nivel:       ' + empleado.getInformacionAcademica(0) + '\n' +
        'Institución: ' + empleado.getInformacionAcademica(1) + '\n' +
        'Título:      ' + empleado.getInformacionAcademica(2) + '\n'
        + '</pre>',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup: 'format-pre'
      }
    });

  } else {
    Swal.fire({
      text: 'No se ha ingresado la información acádemicos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}