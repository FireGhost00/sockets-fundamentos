var socket = io();
//escuchar
socket.on('connect', function() {

    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
})

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Nelson',
    mensaje: 'Hola perro'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor', mensaje);
});