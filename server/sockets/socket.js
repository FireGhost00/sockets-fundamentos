const { io } = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escucahr al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
    });
});