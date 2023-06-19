class Empleado {

    constructor() {
        this.nombres = "";
        this.apellidos = "";
        this.sexo = "";
        this.fechaNacimiento = "";
        this.fechaIngreso = "";
        this.salario = 0;
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
    
        if (mesNacimiento > mesActual) {
            edadEmpleado--;
        } else if (mesNacimiento === mesActual && diaNacimiento > diaActual) {
            edadEmpleado--;
        }
    
        return edadEmpleado;

    }

}


//Funciones de los botones

//Clase empleado


let empleado = new Empleado();

function modificar() {

    empleado.setNombres(document.getElementById('input-nombres').value);
    empleado.setApellidos(document.getElementById('input-apellidos').value);
    empleado.setFechaNacimiento(document.getElementById('fecha-nacimiento').value);
    empleado.setFechaIngreso(document.getElementById('fecha-ingreso').value);
    empleado.setSalario(document.getElementById('salario').value);    

 
    console.log(empleado.getNombres());
    console.log(empleado.getApellidos());
    console.log(empleado.getFechaNacimiento());
    console.log(empleado.getFechaIngreso());
    console.log(empleado.getSalario());
  

}

function calcularBotonEdad() {

    console.log("Edad Empleado: " + empleado.calcularEdad());
    document.getElementById('input-edad').value = empleado.calcularEdad();

}

function calcularAntiguedad(){

    let antiguedad = 0;

}

function calcularPrestaciones() {

    let prestaciones = 0;  


}


