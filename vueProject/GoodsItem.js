export const GoodsItem = {
    props: ['goodsItem'],

    template: `<div class="goods-item ">
                    <h3>{{ goodsItem.product_name }}</h3>
                    <p>{{ goodsItem.price }}</p>
                    <button @click="$root.$refs.basket.addGood(goodsItem) "
                    :id="goodsItem.id_product ">Купить</button>
                </div>`
}