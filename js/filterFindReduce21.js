const personas = [
    { nombre: 'Natasha', edad: 23, cali: 8.9 },
    { nombre: 'Sergio', edad: 27, cali: 10 },
    { nombre: 'Richard', edad: 40, cali: 6.5 },
    { nombre: 'Mark', edad: 50, cali: 5 },
    { nombre: 'Andrea', edad: 20, cali: 8.9 }
]

//filter
let menores = personas.filter(persona => {
    return persona.edad < 25;
});
console.log(menores);
//diferente sintaxis
let mayores = personas.filter(persona => persona.edad > 30);
console.log(mayores);

//Find
let busqueda = personas.find(persona => persona.nombre === 'Natasha');
console.log(busqueda);
//Diferente sintaxis
let busqueda2 = personas.find(persona => {
    return persona.nombre === 'Sergio';
});
console.log(busqueda2);

//Reduce
let total = personas.reduce((sumaDeEdades, persona) => {
    return sumaDeEdades + persona.edad;
}, 0);

console.log(total / personas.length);
//Ejemplo
console.log('SACANDO MEDIA DE CALIFICACIONES')
let sumaCalificacion = personas.reduce((sumaTotal, alumno) => {
    return sumaTotal + alumno.cali;
}, 0);

console.log(`La media de calificaciones del salon es: ${sumaCalificacion / personas.length}`);