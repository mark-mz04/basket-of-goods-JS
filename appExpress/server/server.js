const express = require('express')
const fs = require('fs')
const basket = require('./basket')
const app = express()

app.use(express.json())
app.use('/', express.static('public'))


// get запрос к каталогу товаров
app.get('/api/products', (req, res) => {
    fs.readFile('server/dataBase/products.json', (err, data) => {
        if (err) {
            console.log(err)
            res.send({ result: 0, text: err })
            return
        }

        res.send(data)
    })
})

// get запрос к корзине товаров
app.get('/api/basket', (req, res) => {
    fs.readFile('server/dataBase/userBasket.json', (err, data) => {
        if (err) {
            console.log(err)
            res.send({ result: 0, text: err })
            return
        }

        res.send(data)
    })
})

// post запрос к корзине товаров (добавление товара)
app.post('/api/basket', (req, res) => {
    fs.readFile('server/dataBase/userBasket.json', (err, data) => {
        if (err) {
            console.log(err)
            res.send({ result: 0, text: err })
            return
        }

        let newBasket = basket.add(JSON.parse(data), req)
        fs.writeFile('server/dataBase/userBasket.json', newBasket, (err) => {
            if (err) {
                console.log(err)
                res.send({ result: 0, text: err })
                return
            }
            res.send({ result: 1 })
        })
    })
})

// put запрос к корзине товаров (увеличение товара)
app.put('/api/basket/:id', (req, res) => {
    fs.readFile('server/dataBase/userBasket.json', (err, data) => {
        if (err) {
            console.log(err)
            res.send({ result: 0, text: err })
            return
        }

        let newBasket = basket.increase(JSON.parse(data), req)
        fs.writeFile('server/dataBase/userBasket.json', newBasket, (err) => {
            if (err) {
                console.log(err)
                res.send({ result: 0, text: err })
                return
            }
            res.send({ result: 1 })
        })
    })
})

// put запрос к корзине товаров (уменьшение товара)
app.put('/api/basket/:id', (req, res) => {
    fs.readFile('server/dataBase/userBasket.json', (err, data) => {
        if (err) {
            console.log(err)
            res.send({ result: 0, text: err })
            return
        }

        let newBasket = basket.decrease(JSON.parse(data), req)
        fs.writeFile('server/dataBase/userBasket.json', newBasket, (err) => {
            if (err) {
                console.log(err)
                res.send({ result: 0, text: err })
                return
            }
            res.send({ result: 1 })
        })
    })
})

// delete запрос к корзине товаров (удаление товара)
app.delete('/api/basket/:id', (req, res) => {
    fs.readFile('server/dataBase/userBasket.json', (err, data) => {
        if (err) {
            console.log(err)
            res.send({ result: 0, text: err })
            return
        }

        let newBasket = basket.del(JSON.parse(data), req)
        fs.writeFile('server/dataBase/userBasket.json', newBasket, (err) => {
            if (err) {
                console.log(err)
                res.send({ result: 0, text: err })
                return
            }
            res.send({ result: 1 })
        })
    })
})

app.listen(4200, () => console.log('Server 4200 started...'));