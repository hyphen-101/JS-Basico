let puntaje = Number(prompt('Digite el puntaje: '));

if (puntaje) {
    console.log(`Si hay puntaje ${puntaje}`);
} else {
    console.log(`No hay puntaje`);
}

let dinero = 30;
let totalCarrito = 500;
let tarjeta = true;

if (dinero > totalCarrito) {
    console.log('Pago correcto');
} else if (tarjeta) {
    console.log('pagaste con tarjeta');
} else {
    console.log('fondos insuficientes');
}
//ternario
const logueado = true;

console.log(logueado ? 'si estas logueado' : 'no estas logueado');