const express = require('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto: ${PORT}`)
});

server.on('error', (err) => {console.log(err)});

const Contenedor = require('./index.js')

const productos = new Contenedor('./productos1.txt')

app.get('/productos', async (req, res) => {
    try {
        const products = await productos.getAll()
        res.send(products)
    } catch (error) {
        res.send(error)
    }
    
});

app.get('/productoRandom', async (req, res) => {
    try {
        let random = Math.floor(Math.random() * 4) +1;
        const product = await productos.getProductRandom(random);
        res.send(product)
    } catch (error) {
        res.send(error)
    }
})