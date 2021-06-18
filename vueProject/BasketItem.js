export const BasketItem = {
    props: ['item'],
    emits: ['remove'],
    template: `
            <div class="basket-item">
                    <h3>{{ item.product_name }}</h3>
                    <p class="product-price">{{item.price*item.quantity}}руб.</p>
                    <p class="product-quantity ">Количество: {{item.quantity}}</p>
                    <button @click="$emit('remove', item)" :data-id="item.id_product" class="basket-btn" type="button">&times;</button>
            </div>`

}