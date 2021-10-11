import { BasketItem } from "./BasketItem.js";

export const Basket = {
    inject: ['API', 'getJson', 'postJson', 'putJson', 'delJson'],
    components: {
        BasketItem
    },

    data() {
        return {
            basket: [],
            isVisibleBasket: false
        }
    },

    methods: {
        addGood(item) {
            let find = this.basket.find(el => el.id_product === item.id_product)
            if (find) {
                this.putJson(`/api/basket/${find.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result) {
                            find.quantity++
                        }
                    });
                return;
            }
            let prod = Object.assign({ quantity: 1 }, item)
            this.postJson(`/api/basket`, prod)
                .then(data => {
                    if (data.result) {
                        this.basket.push(prod);
                    }
                });
        },

        remove(item) {
            let find = this.basket.find(el => el.id_product === item.id_product)
            if (find.quantity > 1) {
                this.putJson(`/api/basket/${find.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result) {
                            item.quantity--
                        }
                    });
                return;
            }

            this.delJson(`/api/basket/${find.id_product}`, item)
                .then(data => {
                    if (data.result) {
                        this.basket.splice(this.basket.indexOf(item), 1)
                    }
                })
        }
    },
    mounted() {
        this.getJson(`/api/basket`)
            .then((data) => {
                if (!data) {
                    return;
                }
                for (let product of data.contents) {
                    this.basket.push(product);
                }
            });
    },

    template: `
    <button @click="isVisibleBasket = !isVisibleBasket" class="cart-button" type="button">Корзина</button>
            <div v-show="isVisibleBasket" class="basket">
                <p v-if="!basket.length">Корзина пуста.</p>
                <BasketItem v-for="item of basket"
                :key="item.id_product"
                :item="item"
                @remove="remove"></BasketItem>
            </div>`
}