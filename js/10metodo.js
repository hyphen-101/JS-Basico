//metodos
//una funcion dentro de un objeto se le conoce como metodo
let radio = {
    reproductor: function(cancion) {
        console.log('Reproduciendo la canción: ' + cancion);
    },
    pausar: function() {
        console.log('Paused...');
    },
    play: function(cancion) {
        console.log('Playing ' + cancion);
    }

}

//Tambien los metodos se pueden escribir afuera del objeto
radio.borrar = function(id) {
        console.log('Borrando cancion con Id: ' + id)
    }
    //llamando a los metodos dentro de un obj.
radio.reproductor('Jambi');
radio.pausar();
radio.play('Wynnona´s big brown beaver');
radio.borrar(123);