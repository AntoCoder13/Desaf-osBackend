const express = require('node:express')
const port = 3000

class Products {
    constructor() {
    }
  
    async get() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' },
          ]);
        }, 2000);
      });
    }
  
    async find(pid) {
      return new Promise(resolve => {
        setTimeout(() => {
          const products = [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' },
          ];
  
          const product = products.find(p => p.id === parseInt(pid));
          resolve(product);
        }, 2000);
      });
    }
  }

app.get('/products', (req, res) => {
    const { limit } = req.query
    const productsManager = new Products()

    const products = products.get()
    res.json({ products: products })
})

app.get('/products/:pid', (req, res) => {
    const { pid } = req.params
    const productsManager = new Products()

    const products = products.get()

    const product = products.find()

    res.json({ products: products })
})

app.listen(port, () => {
    console.log(`Server is running at port ${ port }`)
})