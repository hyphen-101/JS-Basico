let banda = 'Tool',
    cancion = 'Jambi';
let nombre;

nombre = banda + ': ' + cancion;
console.log(nombre);
/*Funcion length 
Esta funcion nos permite saber el numero de caracteres que
tiene un variable String incluyendo espacios
/nos dara el numero en entero, no en string*/
console.log(nombre.length);
/*Funcion concat
concat concatena mas texto a nuestra variable, funciona
con dos parametros*/
nombre = nombre.concat(' ', 'y es genial');
console.log(nombre);
/*Funcion toLowerCase
pone todas las letras de nuestro string en minusculas*/
console.log(nombre.toLowerCase());
/*Funcion toUpperCase
pone todas las letras de nuestro string en mayusculas */
console.log(nombre.toUpperCase());
// Funicon Split divide una cadena de texto y los pone en un
// y coloca cada palabra en un arreglo

let lyric = 'shine on forever shine on benevolent sun'

jambiLyric = lyric.split(' ');
/*parametro en el cual va a divir la cadena
 en este caso un espacio en blanco*/
console.log(jambiLyric);

//ej 2
let listaDeSuper = 'huevo, leche, pan, brocoli, sandia';

let listaArray = listaDeSuper.split(',');
console.log(listaArray);
/*replace
remplace la palabra indicada por una nueva*/
listaDeSuper = listaDeSuper.replace('pan', 'tortillas'); //parametros
console.log(listaDeSuper);
/*includes 
revisa que algo exista en la lista , y nos
 regresa un valor booleano */
listaDeSuper = listaDeSuper.includes('aceite');
console.log(listaDeSuper);

/*Un ejemplo practio es para valorar si alguin verdaderamente
añadio un correo */

let correo = 'web.master@hotmail.com';
email = correo.includes('@');
console.log(email);
/*funcion repeat 
nos ayuda a repetir un string las veces que queramos*/
let master = 'master ',
    puppet = 'of puppets';
master = master.repeat(3);
console.log(`${master} ${puppet}`);