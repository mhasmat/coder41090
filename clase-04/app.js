let nombre = prompt('Ingrese su nombre:');
let apellido = prompt('Ingrese su apellido:');

function usuario(nombre, apellido) {    
    return `${nombre} ${apellido}`
}

function saludar(){
    document.write(`Hola ${usuario(nombre, apellido )}!`);
}

saludar(usuario());
document.write("<hr>");
//---------------------------------------------------------

let primerNro = Number(prompt('Ingrese primer número:'));
let segundoNro = Number(prompt('Ingrese segundo número:'));
let operacion = prompt(`Seleccione la operación: 
                        sumar(+)
                        restar(-)
                        multiplicar(*)
                        dividir(/)`);

function calculadora(primerNro, segundoNro, operacion){
    switch(operacion) {
        case '+':
            return primerNro + segundoNro;
            break;
        case '-':
            return primerNro - segundoNro;
            break;
        case '*':
            return primerNro * segundoNro;
            break;
        case '/':
            return primerNro / segundoNro;
            break;
        default:
            return 0;
            break;
    }    
}

document.write(`> ${primerNro}`);
document.write("<br>");
document.write(`> ${operacion}`);
document.write("<br>");
document.write(`> ${segundoNro}`);
document.write(`<hr>`);
document.write(`Resultado: ${calculadora(primerNro, segundoNro, operacion)}`);