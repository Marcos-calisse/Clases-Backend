const socket = io().connect();



const render = (productos) =>{
    
    let listaProductos = document.querySelector('#listaProductos');
    let html = productos.map(producto => {
            return (`
                    <li>${producto.id}</li>
                    <li>${producto.nombre}</li>
                    <li>${producto.precio}</li>
            `)
        }
    )
    listaProductos.innerHTML = html;
}

const addProduct = (event) => {
    const nombre = document.getElementById('nombre').value
    const precio = document.getElementById('precio').value
    const url = document.getElementById('url').value

    const producto = () => {
        console.log(producto)
        socket.emit('producto-nuevo', producto)
    }
    return false
}

socket.on('mensaje-server', data => {
    render (data.productos)
})
