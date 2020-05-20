//Function declaration
const nombre = prompt('Cual es tu nombre?'),
    trabajo = prompt('Cual es tu trabajo?');

function saludar(nom, tra) {
    console.log('Hola ' + nom + ' tu trabajo es: ' + tra);
}

saludar(nombre, trabajo);


//function expresion
const suma = function(a = 0, b = 0) {
    console.log(a + b);
}
suma(10, 20);
suma(20);
suma(09, 08);
//IIFE **AquiVaElNomVariable**
(function(tecnologia) {
    console.log('Aqui estoy aprendiendo ' + tecnologia)

})('JavaScript') //Aqui el texto o numero que va dentro de variable