import { BasketItem } from "./BasketItem.js";

export const Basket = {
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
                find.quantity++
            } else {
                let prod = Object.assign({ quantity: 1 }, item)
                this.basket.push(prod)
            }
        },

        remove(item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                this.basket.splice(this.basket.indexOf(item), 1)
            }
        }
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