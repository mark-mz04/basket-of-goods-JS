window.onload = () => {

    class GoodsItem {
        constructor(title, price) {
            this.title = title
            this.price = price
        }

        render(title = 'good', price = 0) {
            return `<div class="goods-item">
                <img src="#" alt="Pictures">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class='buy-btn'>Купить</button>
            </div>`;
        };
    }

    class GoodsList {
        constructor() {
            this.goods = [];
        }

        sumPrice() {
            let summ = 0
            this.goods.forEach(item => {
                summ += item.price
            })
            //console.log(summ)
        }

        initListHTML() {
            this._fetchGoods()
            this._render()
        }

        _fetchGoods() {
            this.goods = [
                { title: 'Shirt', price: 150 },
                { title: 'Socks', price: 50 },
                { title: 'Jacket', price: 350 },
                { title: 'Shoes', price: 250 },
            ];
        }

        _render() {
            let listHtml = '';
            this.goods.forEach(good => {
                const goodItem = new GoodsItem(good.title, good.price);
                listHtml += goodItem.render();
            });
            document.querySelector('.goods-list').innerHTML = listHtml;
        }
    }

    const list = new GoodsList();
    list.initListHTML()
    // console.log(list)
    // list.sumPrice()

    class Basket {
        constructor() {

        }
        // посчитать количество товаров в корзине
        // посчитать сумму товаров в корзине
        // сделать заказ
    }

    class BasketItem {
        constructor() {
            // имя товара
            // количество данного элемента в корзине
            // цена товара
        }
        // добавить элемент в корзину
        // удалить элемент из корзины
    }











}


