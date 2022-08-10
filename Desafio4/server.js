const express = require('express');

const Contenedor = require('./index')

const productos = new Contenedor('./productos.txt')

const app = express();

const { Router } = express;

const routerProductos = Router();

const PORT = 8080;

app.use(express.json());

app.use(express.static('public'));

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

routerProductos.post('/api/productos/', (req, res) => {
    
    const { body } = req.body
    
    res.json(
        {
            mensaje: 'todo ok',
            body
        }
    )
});

routerProductos.put('/:id', (req, res) => {
    
    const { title, price, thumbnail } = req.body
    const { id } = req.params

    const respuesta = productos.getProductById({id, title, price, thumbnail})

    res.json({ respuesta })
})

routerProductos.delete('/api/productos/:id', (req, res) => {

    const { id } = req.params

    res.json(
        {
            producto: 'producto borrado',
            id
        }
    )
});



const server = app.listen(PORT, () => {
    console.log(`escucuchando en puerto ${PORT}`)
});