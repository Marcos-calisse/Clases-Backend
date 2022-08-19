const express = require('express');
const { Server: IOServer } = require('socket.io');
const { Server: ServerHttp } = require('http');

const app = express();
const serverHttp = new ServerHttp(app);
const io = new IOServer(serverHttp)

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
});

const productos = [
    {id: 1, nombre: 'boxer', precio: 1000},
    {id: 2, nombre: 'gorra', precio: 2000},
    {id: 3, nombre: 'billetera', precio: 1500}
];

io.on('connection', (socket) => {

    const mensaje ={
        mensaje: 'ok',
        productos
    }
    socket.emit('mensaje-server', mensaje)
    socket.on('producto-nuevo', (producto) => {
        console.log(producto)
    })
});

serverHttp.listen(8080, () =>{
    console.log('listening on port 8080')
});