const express = require('express');
const { Server: IOServer } = require('socket.io');
const { Server: ServerHttp } = require('http');
const dotenv = require('dotenv').config();
const { Router } = express;
const routerProductos = Router();

const app = express();
const serverHttp = new ServerHttp(app);
const io = new IOServer(serverHttp)

app.use(express.static('public'));
app.use(express.json());
app.use('/api/productos', routerProductos);

app.use(express.urlencoded({ extended: true }));


routerProductos.get('/api/productos', async (req, res) => {
    
    try {
        const products = await productos.getAll()
        res.send(products)
    } catch (error) {
        res.send(error)
    }

    res.sendFile(__dirname, + '/public/index.html')
})


routerProductos.get('/api/productos/:id', (req, res) => {
    
    const { id } = req.params
    
    res.json(
        {
            id
        }
    )
});

app.get('/api/productos', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
});


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

const administrador = true;

const PORT = process.env.PORT;

serverHttp.listen(PORT, () =>{
    console.log('listening on port 8080')
});