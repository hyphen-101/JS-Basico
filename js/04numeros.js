let numero1 = 27,
    numero2 = 41.5,
    numero3 = -5,
    numero4 = 41.3,
    numero5 = 144,
    numero6 = 5;

var resultado;
//suma
resulatado = numero1 + numero2;
console.log(resulatado);
// resta
resulatado = numero1 - numero2;
console.log(resulatado);
// multiplicacion
resulatado = numero1 * numero2;
console.log(resulatado);
// // //division
resulatado = numero1 / numero2;
console.log(resulatado);

//Clase Math
//round, floor, ceil. 
//round redondea el numero .5 lo redonde a un entero y de .4 a cero
resultado = Math.round(numero2);
console.log(resultado);
//Floor, solo quita los decimales del numero o lo redondea a la base
resultado = Math.floor(numero2);
console.log(resultado);
//ceil, lo redondea .1 a un entero, lo opuesto a floor
resultado = Math.ceil(numero4);
console.log(resultado);

// Raiz cuadrada sqrt
resultado = Math.sqrt(numero5);
console.log(resultado);
// potencia pow
/*en los parametros primero va la base y despues la potencia*/
resultado = Math.pow(numero6, 3);
console.log(resultado);
//Numero absoluto
resultado = Math.abs(numero3);
console.log(resultado);
/*Como convertir Strings a numeros*/
let dato1 = '20',
    dato2 = 10,
    dato3 = 38.4;
console.log(dato1); // dato1 se mostrar como string en lugar de numero
//Number
console.log(Number(dato1)); // dato1 es un numero ahora, gracias a Number
//ParseInt solo tomara numeros enteros
console.log(parseInt(dato3));
//parseFloat tomara decimales
console.log(parseFloat(dato3));
//Number tomara decimales si hay decimales o enteros si la variable lo es
//Tambien vea los proximos ejemplos
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
//To fixed define cuantos decimales se van a imprimir por pantalla
let dato4 = '12123489.9845',
    dato5 = 14812304.03948;
console.log(Number(dato4).toFixed(3));
console.log(dato5.toFixed(4));

//De Numeros a String
// un uso practico es para validar los caracteres de 
// Tarjetas de credito, año, codigo postal etc.
//ej
let numeroTarjeta = 9876543216549876,
    año = 2020,
    codigoPostal = 85214;
console.log(numeroTarjeta);
console.log(String(numeroTarjeta).length); //length es una funcio exclusiva de strings
console.log(año);
console.log(String(año).length);
console.log(codigoPostal);
console.log(String(codigoPostal).length);
//
console.log(true);
console.log(String(true).length);
console.log(false);
console.log(String(false).length);