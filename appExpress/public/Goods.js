import { GoodsItem } from "./GoodsItem.js";

export const Goods = {
    inject: ['API', 'getJson'],
    components: {
        GoodsItem
    },

    data() {
        return {
            goods: [],
            filteredGoods: [],
        }
    },
    computed: {
        filter() {
            return this.filteredGoods = this.goods.filter(item => new RegExp(this.$root.$refs.search.searchLine, 'i').test(item.product_name));
        }
    },

    mounted() {
        this.getJson(`/api/products`)
            .then((data) => {
                for (let product of data) {
                    this.goods.push(product);
                    this.filteredGoods.push(product);
                }
                // this.goods = JSON.parse(result)
                // this.filteredGoods = JSON.parse(result)
            });
    },

    template: `<div class="goods-list ">
                <GoodsItem v-for="item of filteredGoods "
                :key="item.id_product "
                :goodsItem="item"></GoodsItem>
                </div>`
}