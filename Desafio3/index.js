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

    async getProductById(obj){
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8');
            let dataArchivoParse = JSON.parse(dataArchivo);
            let producto = dataArchivoParse.findIndex(obj => obj.id === id)
            if (producto) {
                return producto
            } else {
                return {error: 'no hay productos'}
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Contenedor;