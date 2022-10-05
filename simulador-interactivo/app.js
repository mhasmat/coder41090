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
  console.log(usuarioEnLocal);
};

//capturo el boton desde el DOM
const botonSesion = document.getElementById('sesion');
//evento a disparar con el boton
botonSesion.addEventListener('click', iniciarSesion);

// //seccion tarjetas
// const apiData = 'productos.json';
// //capturo el contenedor de las tarjetas
// const contenedor = document.getElementById('contenedor-productos');

// //llamada al endpoint donde está la data
// fetch(`${apiData}`)
//   .then((response) => response.json())
//   .then((productos) => {
//     //recorro el array de objetos con el forEach
//     productos.forEach((producto) => {
//       //creo un elemento de tipo div
//       const div = document.createElement('div');
//       //le agrego la clase producto al div
//       div.classList.add('producto');
//       //inyecto la data en el html
//       div.innerHTML = `
//               <img src=${producto.img} alt="${producto.nombre}" id="img-tarjetas">
//               <h4>${producto.nombre}</h4>
//               <p>${producto.descripcion}</p>
//               <p>${producto.precio}</p>
//               <button class="btn btn-warning btn-comprar">Comprar</button>
//               <button class="btn btn-success btn-carrito">Carrito</button>
//               `;
//       //le agrego el hijo(div) al padre(contenedor)
//       contenedor.appendChild(div);

//       //funcion ampliar
//       let visor = document.getElementById('visor-img');
//       let imgTarjetas = document.getElementById('img-tarjetas');
//       productos.forEach(() => {
//         imgTarjetas.addEventListener('click', function ampliar() {
//           imgTarjetas.style.transform = 'scale(1.9)';
//         });
//       });
//     });
//   });

const stock = [
  {
    id: 1,
    nombre: 'Cupcakes',
    precio: 500,
    minimo: 6,
    inventario: 20,
    descripcion: 'saraza',
    img: 'img/cupcakes.jpg',
  },
  {
    id: 2,
    nombre: 'Alfajorcitos',
    precio: 100,
    minimo: 12,
    inventario: 40,
    descripcion: 'saraza',
    img: 'img/alfajorcitos.jpg',
  },
  {
    id: 3,
    nombre: 'Petit Fours',
    precio: 800,
    minimo: 6,
    inventario: 20,
    descripcion: 'saraza',
    img: 'img/petitFours.png',
  },
  {
    id: 4,
    nombre: 'Cookies',
    precio: 900,
    minimo: 12,
    inventario: 40,
    descripcion: 'saraza',
    img: 'img/cookies.jpg',
  },
];

let lista = document.querySelector('ul#listaCarrito');
let temp = document.querySelector('template');
let card = temp.content.querySelector('.card');

stock.forEach((elemento) => {
  let cardClonada = card.cloneNode(true);
  cardClonada.querySelector('.card-img-top').src = elemento.img;
  cardClonada.querySelector('h4').innerText = elemento.nombre;
  cardClonada.querySelector('p').innerText = elemento.descripcion;
  cardClonada.querySelector('.card-footer').innerText = `$ ${elemento.precio}`;

  lista.appendChild(cardClonada);

  cardClonada.querySelector('button').addEventListener('click', () => {
    console.log('Se agregó al carrito ');
  });
});

//guardar en localStorage
const guardarEnLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

guardarEnLocal('listaProductos', JSON.stringify(stock));

const almacenado = JSON.parse(localStorage.getItem('listaProductos'));
console.log('Almacenado:', almacenado);

//carrito
let carrito = [];

const agregarAlCarrito = () => {
  let productoId = Number(prompt('ID del producto:'));
  let cantidad = Number(prompt('Cantidad:'));
  let producto = stock.find((item) => item.id === productoId);
  producto.cantidad = cantidad;
  producto.total = producto.precio * cantidad;
  carrito.push(producto);
};

agregarAlCarrito();
agregarAlCarrito();

const calcularTotal = (carrito) => {
  let total = 0;

  carrito.forEach((producto) => {
    total += producto.total;
  });
  return total;
};

// alert(`La suma de su carrito da: $ ${calcularTotal(carrito)}`);

const mostrarCarrito = (products) => {
  const contenedorCarrito = document.querySelector('#contenedor-carrito');
  contenedorCarrito.innerHTML = `<h3>Carrito</h3>`;

  products.forEach((product) => {
    const card = document.createElement('card');
    card.innerHTML += `<div>                      
                      <h5>${product.nombre}</h5>
                      <p>Precio: $ ${product.precio}</p>
                      <p>Cantidad: ${product.cantidad}</p>
                      <hr>
                      </div>`;

    contenedorCarrito.appendChild(card);
  });
};

mostrarCarrito(carrito);
