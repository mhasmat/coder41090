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

//incorporando arrays
//interactuar con HTML
const productos = [
    { id: 1, titulo: "Cupcakes", precio: 500 },
    { id: 2, titulo: "Alfajorcitos", precio: 100 },
    { id: 3, titulo: "Petit Fours", precio: 800 },
    { id: 4, titulo: "Cookies", precio: 900 },     
];

//recorriendo el array de objetos
for (let prod of productos) {
    //creando un elemento tipo div
    let contenedor = document.createElement("div");
    //innerHTML con una plantilla
    contenedor.innerHTML = `<h4> ID: ${prod.id} </h4>
                            <p>  Producto: ${prod.titulo} </p>
                            <p><b> $${prod.precio} </b></p>`;

    document.body.appendChild(contenedor);
  }
  
  //carrito
  let carrito = [];
  const agregarCarrito = document.getElementById("agregar");

  const addCarrito = () => {
    for (const producto of productos) {
      carrito.push(producto.id);
    }
    console.log(carrito);
  }

agregarCarrito.addEventListener('click', addCarrito);







