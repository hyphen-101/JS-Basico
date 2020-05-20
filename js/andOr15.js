let dinero = 301;
let totalCarrito = 500;
let tarjeta = false;
/**OR evalua que almenos una de las condiciones se cumpla */
if (dinero > totalCarrito || tarjeta) {
    console.log('Pago correcto');
} else {
    console.log('fondos insuficientes');
}
/**and evalua que todas ls condicionales se cumplan */
let hora = 11;
if (hora > 0 && hora <= 11) {
    console.log('buenos dias');
} else if (hora > 12 && hora <= 19) {
    console.log('buenas tardes');
} else if (hora > 18 && hora <= 24) {
    console.log('buenas noches');
} else {
    console.log('hora no valida');
}