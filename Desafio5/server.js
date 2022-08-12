const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const fs = require('fs')

const PORT = 8080;

app.use(express.json());

app.use(express.static('public'));

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
)

app.set('views', './views')
app.set('view engine', 'hbs')

app.get('/', (req, res) =>{
    res.render('index.hbs', {})
})

const server = app.listen(PORT, () => {
    console.log(`escucuchando en puerto ${PORT}`)
});

