var helado = 30;
var topping = "kinder";
var precio;
var precioFinal;

if (topping === "oreo") {
    precio = 10;
} else if (topping === "kitkat") {
    precio = 15;
} else if (topping === "kinder") {
    precio = 25;
} else {
    console.log("No tenemos este topping");
}

if (precio !== undefined) {
    precioFinal = helado + precio;
    console.log("El helado cuesta $" + precioFinal);
}




var tienda = prompt("ingrese su pedido")

switch (tienda.toLowerCase()) {
    case "carne":
        console.log("Acabas de pedir carne, te ofrecemos un vino tinto para acompañar")
        break;

    case "pescado":
        console.log("Acaba de elegir Pescado, Te ofrecemos un vino blanco para acompañar")
        break;

    case "verdura":
        console.log("Acaba de elegir Verduras, le ofrecemos agua para acompañar")
        break;

    default:
        console.log("Lo sentimos! solo contamos con Carne, Pescado y Verdura")
        break;
}



var array = [1,"pan",2,"queso",3,"vino",4]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[1])
}




var valor = false;
var numero = 0;

while (valor == false) {
    console.log(valor)
    console.log("El numero mayor que 11")

    console.log("el valor del numero es: " + numero);
    numero++
    if(numero == 12){
        valor = true
    }
}