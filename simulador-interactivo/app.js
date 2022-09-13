let usuarioGuardado = 'martin'; //el usuario válido
let nombreIngresado = ''; //acá se guarda lo que el usuario tipea en el prompt
let contador = 0; //contador de intentos de login

let encabezado = document.getElementById('encabezado');

//funcion que cuenta los intentos de login
function intentosLogin() {
  while (nombreIngresado !== usuarioGuardado && contador < 3) {
    nombreIngresado = prompt('Ingrese su nombre de usuario');
    contador++;
  }
}

//funcion que valida el nombre de usuario
//para ver si coincide con el q está guardado
function validarUsuario() {
  if (nombreIngresado === usuarioGuardado) {
    encabezado.innerHTML += `Hola ${usuarioGuardado.toUpperCase()}, bienvenido!`;
  } else {
    encabezado.innerHTML += `El usuario no es válido. Intentos agotados.`;
  }
}

//lo que hace el boton en cuestion
const iniciarSesion = () => {
  intentosLogin(); //invocando las funciones
  validarUsuario(); //invocando las funciones
  if (validarUsuario) {
    //para remover el evento una vez q se inicia sesion
    botonSesion.removeEventListener('click', iniciarSesion);
  }
};

//capturo el boton desde el DOM
const botonSesion = document.getElementById('sesion');
//evento a disparar con el boton
botonSesion.addEventListener('click', iniciarSesion);
