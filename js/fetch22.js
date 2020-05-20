//Fetch 

// function descargarUsuarios(cantidad) {
//     const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;

//     fetch(api)
//         .then(respuesta => respuesta.json())
//         .then(datos => imprimirHtml(datos.results));

// }

// descargarUsuarios(30);

// function imprimirHtml(datos) {
//     datos.forEach(usuario => {
//         console.log(usuario);
//         //Creacion de etiqueta de texto
//         const li = document.createElement('li');
//         //obj destructuring
//         let { name: { first }, name: { last }, picture: { medium }, nat } = usuario;
//         li.innerHTML = `
//                     nombre: ${first} ${last}
//                     pais: ${nat}
//                     imagen: <img src="${medium}">

//         `;
//         //anexo de etiqueta dentro del id en mi index.html
//         document.querySelector('#app').appendChild(li);
//     });
// }