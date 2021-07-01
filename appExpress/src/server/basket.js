// методы обработки корзины

// добавление товара
const add = (basket, req) => {
    basket.contents.push(req.body)
    return JSON.stringify(basket, null, 4)
}

// увеличение количества товара в корзине
const increase = (basket, req) => {
    const find = basket.contents.find(item => item.id_product === +req.params.id)
    find.quantity += req.body.quantity
    return JSON.stringify(basket, null, 4)
}

// уменьшение количества товара в корзине
const decrease = (basket, req) => {
    const find = basket.contents.find(item => item.id_product === +req.params.id)
    find.quantity -= req.body.quantity
    return JSON.stringify(basket, null, 4)
}

// удаление товара из корзины
const del = (basket, req) => {
    const find = basket.contents.find(item => item.id_product === +req.params.id)
    basket.contents.splice(basket.contents.indexOf(find), 1)
    return JSON.stringify(basket, null, 4)
}

// экспорт всех методов
module.exports = {
    add: add,
    increase: increase,
    decrease: decrease,
    del: del
}