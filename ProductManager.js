const fs = require('node:fs')

class ProductManager {
    #precioBaseDeGanacia = 0.15
    #id = 1

    constructor(path) {
        this.productos = [],
            this.path = path
    }

    obtenerProductos() {
        try {
            const data = fs.readFileSync(this.path, 'utf-8')
            const productos = JSON.parse(data)

            console.log('Productos cargados: ', this.productos)
        } catch (error) {
            console.error('Error al obtener los productos: ', error)
        }
    }

    agregarProducto(nombre, descripcion, precio, thumbnail, codigo, stock) {
        /*const productosExiste = this.productos.find(producto => producto.codigo === codigo)
        if (productosExiste) return `El producto con código: ${codigo} ya existe.`

        const obtenerProductosPorId = this.productos.find(producto => producto.id === id)
        if (!obtenerProductosPorId) return `El producto con ID: ${id} no se encontró.`

        const nuevoProducto = {
            id: this.#id++,
            nombre,
            thumbnail, //ruta de imagen
            precio: Math.round(precio * (1 + this.#precioBaseDeGanacia)),
            descripcion,
            stock,
        }
        this.productos.push(nuevoProducto)
        //this.guardarProductos()*/
        try {
            const productoExistente = this.productos.find(producto => producto.nombre === nombre)
            if (productoExistente) {
                console.log(`El producto con nombre '${nombre}' ya existe.`)
                return
            }
            const nuevoProducto = {
                id: this.#id++,
                nombre,
                precio: Math.round(precio * (1 + this.#precioBaseDeGanacia)),
                descripcion,
                stock
            }
            this.productos.push(nuevoProducto)

            fs.writeFileSync(this.path, JSON.stringify(this.productos))
        } catch (error) {
            console.error('Error al agregar el producto: ', error)
        }
    }

    actualizarProducto(id, campo, valorNuevo) {
        const productoIndex = this.productos.findIndex(producto => producto.id === id)
        if (productoIndex === -1) return `El producto con ID: ${id} no se encontró.`

        this.productos[productoIndex][campo] = valorNuevo
        this.guardarProductos()

    }

    //borrarProducto()

    getProductById(id) {
        /*const productoId = productos.find(producto => producto.id === id)
        if (!productoId) {
            console.log('ID NOT FOUND.')
            return null
        }
        else return productoId*/
        try {

            const contenido = fs.readFileSync(this.path, 'utf-8')
            const productos = JSON.parse(contenido)
            const productoId = productos.find(producto => producto.id === id)
            if (!productoId) {
                console.log('ID NOT FOUND.')
                return null
            }
            else {
                return productoId
            }

        } catch (error) {
            console.error('Error al obtener el producto por ID: ', error)

            return null
        }
    }
}

const productManager = new ProductManager()

//productManager.obtenerProductos()
//productManager.agregarProducto()