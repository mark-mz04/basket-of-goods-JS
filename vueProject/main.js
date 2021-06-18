import { Goods } from "./Goods.js";
import { Basket } from "./Basket.js";
import { Search } from "./Search.js";

const Shop = {
    components: {
        Goods,
        Basket,
        Search
    },

    data() {
        return {
            API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
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
        }
    }
}

Vue.createApp(Shop).mount('#app');