class Usuario{
    constructor(nombre, apellido, libros, mascotas ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        return(`${this.nombre} ${this.apellido}`)
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        return this.libros.map(libro => libro.nombre)
    }
}

const usuario1 = new Usuario('Marcos', 'Calisse', [{nombre: 'Padre Rico, Padre Pobre', autor: 'Robert Kiyosaki'}], ['choco', 'lolita'] )

console.log(`Nombre de usuario completo:`,usuario1.getFullName())

usuario1.addMascota('nejo')

console.log(`Nombre de mascotas: ${usuario1.mascotas}`)

console.log(`tengo ${usuario1.countMascotas()} mascotas`)

usuario1.addBook('Los secretos de la mente millonaria', 'Harv Eker')

console.log(usuario1.libros)


