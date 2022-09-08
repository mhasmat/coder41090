let food = prompt("Qué se le antoja cenar?");

switch(food){
    case "hamburguesa":
        document.write(`Pedido: ${food}, valor 1000`);
        break;
    case "pizza":
        document.write(`Pedido: ${food}, valor 1200`);
        break;
    case "lomo":
        document.write(`Pedido: ${food}, valor 900`);
        break;
    default:
        document.write("Hoy no pedimos cena");
        break;
}