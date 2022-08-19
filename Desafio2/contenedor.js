const fs = require('fs');

class Producto{
    constructor(ruta){
        this.ruta = ruta;
    }
    
    async save(obj){
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf-8');
            let dataParse = JSON.parse(data);
            if(dataParse.length){
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataParse, {...obj, id: dataParse[dataParse.length -1].id +1 } ], null, 2), 'utf-8');
            }else{
                await fs.promises.writeFile(this.ruta, JSON.stringify([ {...obj, id: 1} ], null, 2), 'utf-8');
            }
        }catch(err){
            console.log(err)
        }
        
    }

    async getById(id){
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8');
            let dataArchivoParse = JSON.parse(dataArchivo);
            let producto = dataArchivoParse.find(producto => producto.id === id);
            if (producto) {
                console.log(producto)
                return producto
                
            } else {
                console.log(null)
            }
            
        } catch (error) {
            console.log(error)
        }
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

    async deleteProductById(id) {
        try {
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8');
            let dataArchivoParse = JSON.parse(dataArchivo);
            let producto = dataArchivoParse.find(producto => producto.id === id);
            if (producto) {
                let archivoFiltrado = dataArchivoParse.filter(producto => producto.id !== id);
                await fs.promises.writeFile(this.ruta, JSON.stringify(archivoFiltrado, null, 2), 'utf-8');
            }else{
                console.log('No existe el producto')
            }
            
            
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null,2))
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Producto;