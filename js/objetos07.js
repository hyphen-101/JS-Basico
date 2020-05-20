//Objeto
const persona = {
        nombre: 'Sergio',
        apellido: 'Conchas',
        edad: 27,
        trabajo: true,
        /*Tambien se puede poner un arreglo dentro 
        de un objeto */
        musica: ['deathmetal', 'rock', 'rap', 'grunge'],
        /* hasta objetos dentro de un objeto */
        hogar: {
            ciudad: 'Chihuahua',
            pais: 'mexico',
            nss: 1230934890293
        }
    }
    /* Para acceder a los datos del objeto se pone el nombre 
    del mismo seguido de un punto "." y el nombre de su atributo*/
    //ej.
console.log(persona.nombre);
console.log(persona.musica[3]);
console.log(persona.hogar.pais);
//otra manera de sintaxis
console.log(persona['hogar']['nss']);