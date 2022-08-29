// const dinero= 500
// const totalAPagar = 500

// if (dinero>=totalAPagar){
//     document.write("Podemos pagar")
// }else{
//     document.write("Fondos insuficientes")
// }

const num = Number(prompt("Ingrese un número"));

if (num !== "" && (num > 10 && num < 50)) {
    alert("Correcto!\nEl número está en el rango esperado:  "+num);
    document.write("Correcto! El número está en el rango esperado:  "+num);
} else {
    document.write("El número está fuera de rango: "+ num);
}
