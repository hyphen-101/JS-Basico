//Obj literal
const persona = {
        nombre: 'Sergio',
        edad: 27,
        anioNacimiento: function() {
            return new Date().getFullYear() - this.edad;
        }
    }
    //tambien // arrow
const persona2 = {
    nombre: 'Sergio',
    edad: 27,
    anioNacimiento: () => {
        return new Date().getFullYear() - persona2.edad;
        // debido al scope de un arrow function, la instacia es el nom obj "persona2"en lugar de this
    }
}
console.log(persona.anioNacimiento());
console.log(persona);
console.log(persona2.anioNacimiento());


// object constructor
/*vieja forma
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}
*/

// nueva forma / class declaration
class Tarea {
    constructor(nombre, urgencia) {
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}
const tarea1 = new Tarea('pasear al perro', 'menor');
const tarea2 = new Tarea('tomarse el medicamento', 'media');


console.log(tarea1);
console.log(tarea2);