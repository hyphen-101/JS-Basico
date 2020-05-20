//for index in var

//arreglo
const pendientes = ['lavar moto', 'hacer el super', 'estudiar', 'pasear perro'];

//arreglo con obj
const carritoCompra = [
    { id: 1, producto: 'playera' },
    { id: 2, producto: 'CD' },
    { id: 3, producto: 'pin' },
    { id: 4, producto: 'Sticker' }
]

// objeto
const coche = {
    modelo: 'Civic',
    color: 'azul',
    motor: 'v6',
    puertas: 4
}

for (pendiente of pendientes) {
    console.log(pendiente);
}
console.log('==forEachLoop===========');
pendientes.forEach(pendiente => {
    console.log(pendiente);
});

console.log('============================');

for (item of carritoCompra) {
    console.log(item.producto);
}
console.log('==forEachLoop===========');
carritoCompra.forEach(item => {
    console.log(item.producto);
});

console.log('============================');
/*for (index of Object.keys(coche)) {
    console.log(index);
}*/
for (index of Object.values(coche)) {
    console.log(index);
}
console.log('==forEachLoop===========');
Object.values(coche).forEach(item => { console.log(item); });
Object.keys(coche).forEach(item => { console.log(item); });