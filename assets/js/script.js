// HACER UNA PLATAFORMA BANCARIA QUE PERMITA GIRAR, DEPOSITAR Y VER EL SALDO EN CUENTA
// USUARIO DEBE VALIDAR SU IDENTIDAD CON SU IDENTIFICADOR Y CONTRASEÑA.
// CUANDO EL USUARIO VALIDE SU IDENTIDAD, PODRÁ REALIZAR GIROS, DEPOSITOS Y VER SU SALDO EN CUENTA

// CADA USUARIO TENDRÁ NOMBRE, IDENTIFICADOR, CLAVE Y SALDO EN CUENTA

//AL MENOS 3 CLIENTES

//SI NO COINCIDE IDENTIFICADOR CON CLAVE, MUESTRA ALERT DE ERROR

// SI REALIZA GIROS O DEPOSITOS, SU SALDO SE MODIFICARÁ

//CREACIÓN DE USUARIOS


function Persona(nombre, identificador, clave, saldo) {
    this.nombre = nombre
    this.identificador = identificador
    this.clave = clave
    this.saldo = saldo
}

const Persona1 = new Persona("María Fernanda", 1, "1234", 9000)
const Persona2 = new Persona("Erick Obregón", 2, "4321", 7000)
const Persona3 = new Persona("Jose Ortega", 3, "1324", 6000)

console.log(Persona1)
console.log(Persona2)
console.log(Persona3)


// coincidir usuario con contraseña
//crear menu de la banca

    banca = parseInt(prompt("Bienvenidos a Banca en Linea, Ingrese su ID. (1,2,3)"))
    let pass = null
    switch (banca) {
        case 1:
            pass = prompt("Ingrese su contraseña")
            if (pass == Persona1.clave) {
                alert(`Bienvenido/a ${Persona1.nombre}`)
                usuarioLogeado(Persona1)
            } else if (pass != Persona1.clave) {
                alert("Clave incorrecta")
            }
            break;
        case 2:
            pass = prompt("Ingrese su contraseña")
            if (pass == Persona2.clave) {
                alert(`Bienvenido/a ${Persona2.nombre}`)
                usuarioLogeado(Persona2)
            } else if (pass != Persona2.clave) {
                alert("Clave incorrecta")
            }
            break;
        case 3:
            pass = prompt("Ingrese su contraseña")
            if (pass == Persona3.clave) {
                alert(`Bienvenido/a ${Persona3.nombre}`)
                usuarioLogeado(Persona3)
            } else if (pass != Persona3.clave) {
                alert("Clave incorrecta")
            }
            break;
    }

//Menu de banca en linea 


function usuarioLogeado(usuario) {

        opcion = parseInt(prompt("Seleccione que desea hacer:\n1.-Ver saldo\n2.-Realizar giro\n3.-Realizar deposito\n4.-Salir"))
        let giro = null
        let deposito = null
        switch (opcion) {
            case 1:
                alert(`Su saldo es de ${usuario.saldo}`)
                usuarioLogeado(usuario)
                break;
            case 2:
                giro = parseInt(prompt(`Su saldo es de ${usuario.saldo}\nIngrese el monto que desea girar:`))
                girar(usuario, giro)
                break;
            case 3:
                deposito = parseInt(prompt(`Su saldo es de ${usuario.saldo}\nIngrese el monto que desea depositar:`))
                depositar(usuario, deposito)
                break;
            case 4: 
                alert (`Estimado/a ${usuario.nombre}, que tenga un buen día.`)
                break;
            default:
                if (opcion == 0 || opcion > 5) {
                    usuarioLogeado(usuario)
                }
        }


// Funciones de girar y depositar.

}

function girar(usuario, giro) {
    if (giro > usuario.saldo) {
        alert("Saldo insuficiente")
    } else if (giro <= usuario.saldo) {
        usuario.saldo = usuario.saldo - giro
        alert(`Giraste ${giro}, tu nuevo saldo es de ${usuario.saldo}`)
    }
    usuarioLogeado(usuario)
}
function depositar(usuario, deposito) {
    usuario.saldo = usuario.saldo + deposito
    alert(`Depositaste ${deposito}, tu nuevo saldo es de ${usuario.saldo}`)
    usuarioLogeado(usuario)
}

