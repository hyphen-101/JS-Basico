const multi5 = function(num) {
    return num * 5;
}
let resMulti5 = multi5(2);

console.log(resMulti5);
// arrow function
const multi6 = num => { return num * 6; }
resMulti6 = multi6(4);
console.log(resMulti6);

const div = (num1, num2) => { return num1 / num2; }
res = div(10, 2);
console.log(res);

const ticketFerri = destino => { return `Gracias por viajar con nosotros, su destino: ${destino}`; }
let mensaje = ticketFerri('Tequila');
console.log(mensaje);
//Maquina de descuentos
/*
cantidad = Number(prompt('precio producto'));
porcen = Number(prompt('descuento'));
const porcentaje = (cantidad, porciento) => { return (cantidad / 100) * porciento; }
let descuento = porcentaje(cantidad, porcen);
const precio = (cantidad, descuento) => { return `su total a pagar es de: ${cantidad-descuento}`; }
let precioTotal = precio(cantidad, descuento);
console.log(precioTotal);*/
cantidad = Number(prompt('precio producto'));
porcen = Number(prompt('descuento'));
const porcentaje = (cantidad, porciento) => { return `El precio a pagar es de: ${(cantidad / 100 * porciento - cantidad)*-1}`; }
let precio = porcentaje(cantidad, porcen);
console.log(precio);