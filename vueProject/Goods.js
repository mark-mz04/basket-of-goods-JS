import { GoodsItem } from "./GoodsItem.js";

export const Goods = {
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
        this.$root.makeGETRequest(`${this.$root.API_URL}/catalogData.json`)
            .then((result) => {
                this.goods = JSON.parse(result)
                this.filteredGoods = JSON.parse(result)
            });
    },

    template: `<div class="goods-list ">
                <GoodsItem v-for="item of filteredGoods "
                :key="item.id_product "
                :goodsItem="item"></GoodsItem>
                </div>`
}