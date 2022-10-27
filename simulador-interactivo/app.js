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
  const validacion = nombreIngresado === usuarioGuardado ? true : false;
  validacion
    ? (encabezado.innerHTML += `Hola ${usuarioGuardado.toUpperCase()}, bienvenido!`)
    : (encabezado.innerHTML += `El usuario no es válido. Intentos agotados.`);

  guardarEnLocal('user', JSON.stringify(nombreIngresado));
}

//lo que hace el boton en cuestion
const iniciarSesion = () => {
  intentosLogin(); //invocando las funciones
  validarUsuario(); //invocando las funciones
  validarUsuario &&
    //para remover el evento una vez q se inicia sesion
    botonSesion.removeEventListener('click', iniciarSesion);
  const usuarioEnLocal = JSON.parse(localStorage.getItem('user'));
  // console.log(usuarioEnLocal);
};

//capturo el boton desde el DOM
const botonSesion = document.getElementById('sesion');
//evento a disparar con el boton
botonSesion.addEventListener('click', iniciarSesion);

//seccion tarjetas
//capturo el contenedor de las tarjetas
const contenedor = document.getElementById('contenedor-productos');

let lista = document.querySelector('ul#lista-productos');
let temp = document.querySelector('template');
let card = temp.content.querySelector('.card');

// FETCH
let productosFetch = [];

fetch('productos.json')
  .then((response) => response.json())
  .then((productos) => {
    productos.forEach((elemento) => {
      productosFetch.push(elemento);

      let cardClonada = card.cloneNode(true);
      cardClonada.querySelector('.card-img-top').src = elemento.img;
      cardClonada.querySelector('h4').innerText = elemento.nombre;
      cardClonada.querySelector('p').innerText = elemento.descripcion;
      cardClonada.querySelector(
        '.card-footer'
      ).innerText = `$ ${elemento.precio}`;

      lista.appendChild(cardClonada);

      cardClonada.querySelector('button').addEventListener('click', () => {
        agregarAlCarrito(elemento.id, 1);

        //agregando sweetalert2
        Swal.fire({
          position: 'top-start',
          icon: 'success',
          title: 'Se agregó al carrito!',
          showConfirmButton: false,
          timer: 2000,
        });
      });
    });
  });

//guardar en localStorage
const guardarEnLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

//carrito
let carrito = [];

const agregarAlCarrito = (productoId, cantidad) => {
  let producto = productosFetch.find((item) => item.id === productoId);
  producto.cantidad = cantidad;
  producto.total = producto.precio * cantidad;
  carrito.push(producto);
  mostrarCarrito(carrito);
};

const calcularTotal = (carrito) => {
  let total = 0;

  carrito.forEach((producto) => {
    total += producto.total;
  });
  return total;
};

const mostrarCarrito = (products) => {
  const contenedorCarrito = document.querySelector('#contenedor-carrito');
  contenedorCarrito.innerHTML = `<h3>Carrito:</h3>`;

  products.forEach((product) => {
    const carritoItem = document.createElement('ul');
    carritoItem.innerHTML += `                      
                      <h5>${product.nombre}</h5>
                      <p>Precio: $ ${product.precio}</p>
                      <p>Cantidad: ${product.cantidad}</p>
                      <hr>
                      `;

    contenedorCarrito.appendChild(carritoItem);
  });
};
