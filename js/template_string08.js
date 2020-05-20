//Template String
const nombre = 'Sergio',
    titulo = 'Ingeniero en sistemas';

console.log('Nombre: ' + nombre + ', Titulo:' + titulo);
//Template String Sitaxis
console.log(`Nombre:${nombre}, Titulo: ${titulo}`);

const contenedorHtml = document.querySelector('#mensaje');

//Sintaxis clasica
html = '<ul>' +
    '<li>Nombre: ' + nombre + '</li>' +
    '<li>Titulo: ' + titulo + '</li>' +
    '</ul>';
html2 = `<ul>
            <li> Nombre: ${nombre}</li>
            <li> Titulo: ${titulo}</li>
          </ul>`

contenedorHtml.innerHTML = html2;