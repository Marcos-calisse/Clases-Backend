const fs = require('fs');

class Contenedor{
    constructor(ruta){
        this.ruta = ruta;
    }

    async getAll() {
        let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8');
        let dataArchivoParse = JSON.parse(dataArchivo);
        if (dataArchivoParse.length) {
            return dataArchivoParse
        } else {
            console.log('No hay Productos')
        }
    }

    async getProductRandom(id){
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8');
            let dataArchivoParse = JSON.parse(dataArchivo);
            let producto = dataArchivoParse.find(producto => producto.id === id)
            if (producto) {
                return producto
            } else {
                console.log(null)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Contenedor;