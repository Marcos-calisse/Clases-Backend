const express = require('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`escucuchando en puerto ${PORT}`)
});

app.use(express.json());

app.use(express.static('public'))

app.get('/api/productos', (req, res) => {
    
    res.json(
        [
            {
              "title": "Boxer",
              "precio": 2500,
              "thumbnail": "url imagen producto",
              "id": 1
            },
            {
              "title": "Boxer",
              "precio": 2500,
              "thumbnail": "url imagen producto",
              "id": 2
            },
            {
              "title": "Boxer",
              "precio": 2500,
              "thumbnail": "url imagen producto",
              "id": 3
            },
            {
              "title": "Boxer",
              "precio": 2500,
              "thumbnail": "url imagen producto",
              "id": 4
            }
          ]
    )
})

app.get('/api/productos/:id', (req, res) => {
    const { id } = req.params
    
    res.json(
        {
            id
        }
    )
});

app.post('/api/productos/', (req, res) => {
    const { body } = req.body
    console.log(body)
    res.json(
        {
            mensaje: 'todo ok'
        }
    )
});

app.put('/api/productos/:id', (req, res) => {
    const { body } = req.body
    const { id } = req.params
    res.json(
        {
            producto: id,
            body
        }
    )
})

app.delete('/api/productos/:id', (req, res) => {

    const { id } = req.params
    res.json(
        {
            producto: 'producto borrado',
            id
        }
    )
})