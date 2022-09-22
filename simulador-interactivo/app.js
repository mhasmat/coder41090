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

//seccion tarjetas
const apiData = 'productos.json';
//capturo el contenedor de las tarjetas
const contenedor = document.getElementById('contenedor-productos');

//llamada al endpoint donde está la data
fetch(`${apiData}`)
  .then((response) => response.json())
  .then((productos) => {
    //recorro el array de objetos con el forEach
    productos.forEach((producto) => {
      //creo un elemento de tipo div
      const div = document.createElement('div');
      //le agrego la clase producto al div
      div.classList.add('producto');
      //inyecto la data en el html
      div.innerHTML = `
              <img src=${producto.img} alt="${producto.nombre}" id="img-tarjetas">
              <h4>${producto.nombre}</h4>
              <p>${producto.descripcion}</p>
              <p>${producto.precio}</p>
              <button class="btn btn-warning btn-comprar">Comprar</button>
              <button class="btn btn-success btn-carrito">Carrito</button>
              `;
      //le agrego el hijo(div) al padre(contenedor)
      contenedor.appendChild(div);

      //funcion ampliar
      let visor = document.getElementById('visor-img');
      let imgTarjetas = document.getElementById('img-tarjetas');
      productos.forEach(() => {
        imgTarjetas.addEventListener('click', function ampliar() {
          imgTarjetas.style.transform = 'scale(1.9)';
        });
      });
    });
  });

const lista = document.querySelector('#listaCarrito');

//incorporando arrays
//interactuar con HTML
const productos = [
  { id: 1, titulo: 'Cupcakes', precio: 500 },
  { id: 2, titulo: 'Alfajorcitos', precio: 100 },
  { id: 3, titulo: 'Petit Fours', precio: 800 },
  { id: 4, titulo: 'Cookies', precio: 900 },
];

//recorriendo el array de objetos
for (let prod of productos) {
  //creando un elemento tipo div
  let contenedor = document.createElement('div');
  //innerHTML con una plantilla
  contenedor.innerHTML = `<h4> ID: ${prod.id} </h4>
                            <p>  Producto: ${prod.titulo} </p>
                            <p><b> $${prod.precio} </b></p>`;

  document.body.appendChild(contenedor);
}
