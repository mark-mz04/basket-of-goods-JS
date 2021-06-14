const app = new Vue({
    el: '#app',
    data: {
        API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        goods: [],
        filteredGoods: [],
        basket: [],
        searchLine: '',
        isVisibleBasket: false
    },
    mounted() {
        this.makeGETRequest(`${this.API_URL}/catalogData.json`)
            .then((result) => {
                this.goods = JSON.parse(result)
                this.filteredGoods = JSON.parse(result)
            });
    },

    methods: {
        makeGETRequest(url) {
            return new Promise((resolve) => {
                var xhr;

                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xhr.open("GET", url, true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        resolve(xhr.responseText);
                    }
                };

                xhr.send();
            });
        },

        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
        },

        addGoodInBasket(item) {
            let find = this.basket.find(el => el.id_product === item.id_product)
            if (find) {
                find.quantity++
            } else {
                let prod = Object.assign({ quantity: 1 }, item)
                this.basket.push(prod)
            }
        },

        removeGoodInBasket(item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                this.basket.splice(this.basket.indexOf(item), 1)
            }
        }

    },

    computed: {

    }
});