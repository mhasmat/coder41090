let usuarioGuardado = 'martin'; //el usuario válido
let nombreIngresado = ''; //acá se guarda lo que el usuario tipea en el prompt
let contador = 0; //contador de intentos de login

//funcion que cuenta los intentos de login
function intentosLogin(){
    while (nombreIngresado !== usuarioGuardado && contador <3){
        nombreIngresado = prompt("Ingrese su nombre de usuario");
        contador++;
    }
}

//funcion que valida el nombre de usuario
//para ver si coincide con el q está guardado
function validarUsuario() {
    if (nombreIngresado === usuarioGuardado) {
        document.write(`Hola ${usuarioGuardado.toUpperCase()}, bienvenido!`);
    } else {
        document.write('El usuario es incorrecto. Permiso denegado.');
    }    
}

//invocando las funciones otra vez
intentosLogin();
validarUsuario();
