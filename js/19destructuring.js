const persona = {
    nombre: 'Sergio',
    membresia: 'Premium',
    datos: {
        matriculaCliente: 132834,
        domicilio: {
            calle: 'calle las flores',
            num: '234',
            ciudad: 'Mexico',
            pais: 'mexico',
            codigoPostal: '23445'
        },
        metodoPago: {
            dinero: 'efectivo',
            tarjeta: {
                credito: 'xxx234',
                debito: 'xxx654'
            }
        }

    }
}

//object destructuring
let { nombre } = persona;

console.log('nombre');

let { datos: { matriculaCliente } } = persona;
console.log(matriculaCliente);

let { datos: { metodoPago: { tarjeta: { credito } } } } = persona;
console.log(credito);