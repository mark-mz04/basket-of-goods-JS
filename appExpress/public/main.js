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

    provide() {
        return {
            API: this.API_URL,
            getJson: this.getJson,
            postJson: this.postJson,
            putJson: this.putJson,
            delJson: this.delJson
        }
    },

    methods: {
        // makeGETRequest(url) {
        //     return new Promise((resolve) => {
        //         var xhr;

        //         if (window.XMLHttpRequest) {
        //             xhr = new XMLHttpRequest();
        //         } else if (window.ActiveXObject) {
        //             xhr = new ActiveXObject("Microsoft.XMLHTTP");
        //         }

        //         xhr.open("GET", url, true);
        //         xhr.onreadystatechange = function() {
        //             if (xhr.readyState === 4) {
        //                 resolve(xhr.responseText);
        //             }
        //         };

        //         xhr.send();
        //     });
        // },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },

        postJson(url, data) {
            return fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(result => result.json())
                .catch(err => console.log(err))
        },

        putJson(url, data) {
            return fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(result => result.json())
                .catch(err => console.log(err))
        },

        delJson(url, data) {
            return fetch(url, {
                    method: 'DELETE',
                    body: JSON.stringify(data)
                })
                .then(result => result.json())
                .catch(err => console.log(err))
        }
    }
}

Vue.createApp(Shop).mount('#app');