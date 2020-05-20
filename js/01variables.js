// En java script existen 3 formas de crear variables
// Como escribit las variables y variable VAR**
//  var nombre;
// var nombreCliente = 'Pedro' //Cammel case
// var nombre_cliente = 'Juan' // underscore
// var NombreCliente = 'Fabiolo' // Pascal case


// console.log(nombre);
/* la similitud entre var y let es que te permite declarar
   variables sin valor; despues se le pueden añadir.
   una diferencia es let no puede re-declarar variables mientra
   var sí*/

// let nombre;
// nombre = 'Kare';
// let nombre = 'juan'; // esto es error de sintaxis
// console.log(nombre);

/*Const no puede ser renombrada despues ni rescribirlo. Usar 
 COnst es recomendable cuando se le asigna a un elemento de HTML 
 nunca cambian y se sabe cuales son porque son parte del html*/
const cliente = 'Sergio';
cliente = 'Pedro';

console.log(cliente);

const divMensaje = document.getElementById('mensaje');