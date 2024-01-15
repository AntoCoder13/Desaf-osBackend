const express = require('node:express')
const port = 3000

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