class ProductManager {
    constructor(productos=[]){} 
    #precioBaseDeGanacia = 0.15
    #id = 1

    obtenerProductos() {
        return this.productos
    }

    agregarProducto(nombre, thumbnail, precio, descripcion, codigo, stock) {
        const productosExiste = this.productos.find(producto => producto.codigo === codigo)
        if(productosExiste) return `El producto con código:$(codigo) ya existe.`

        const obtenerProductosPorId = this.productos.find(producto => producto.id === id)
        if(!obtenerProductosPorId) return `El producto con ID:$(id) no se encontró.`

        const nuevoProducto = {
            id: this.#id++,
            nombre,
            thumbnail, //ruta de imagen
            precio: Math.round(precio * (1 + this.#precioBaseDeGanacia)),
            descripcion,
            stock
        }
        //this.productos.push(nuevoProducto)
    }
}

/*agregarProducto(idProducto){
    const producto = this.productos.find(event => event.id === idProducto)
    if (!producto) return console.log('No existe tal producto')

    if(producto.nuevoProducto.includes(idProducto))
    producto.nuevoProducto.push(idProducto)
    return console.log('Producto agregado')
}*/

const productManager = new ProductManager()
productManager.obtenerProductos()
productManager.agregarProducto('Manzana Red Apple', 'La manzana más roja y dulce de todo el condado', 1500, 250)
productManager.agregarProducto('Papel Higiénico El Suavecito', 'Se agradece la suavidad de este producto', 2500, 100)
productManager.agregarProducto('Tequila RedField', 'Para una excelente noche con tus amigos, el mejor tequila al mejor precio', 1200, 130)
productManager.obtenerProductos()
