// Como crear un arreglo
// primera forma de hacer un array
let arregloNumeros = [25, 35, 8, 5, 45];

console.log(arregloNumeros);
console.table(arregloNumeros);

//segunda forma de hacer un array

const meses = new Array('enero', 'febrero', 'marzo');
console.log(meses);
console.table(meses);

console.log(meses[1]);

//para añadir un elemento al arreglo
meses.push('abril', 'mayo', 'junio', 'julio');
// para quitar un elemento del inicio
meses.shift();
// para anadir un elemento al inicio
meses.unshift('enero');
//para quitar un elemento al final del arreglo
meses.pop();
//para eliminar elementos dentro de un rago
meses.splice(0, 2);

console.log(meses.length);
console.log(meses);

// reverse
// organiza los elementos del arreglo al reves
meses.reverse();
console.log(meses);

//sort
//Ordena los elementos alfabeticamente o los numeros de menor a mayor
let listaSuper = ['platano', 'jamon', 'zanahoria', 'yoguth', 'carne'];

console.log(listaSuper.sort());