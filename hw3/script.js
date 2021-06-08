window.onload = () => {
  const API_URL =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

  function makeGETRequest(url) {
    return new Promise((resolve) => {
      var xhr;

      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.open("GET", url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          resolve(xhr.responseText);
        }
      };

      xhr.send();
    });
  }

  class GoodsItem {
    constructor(product_name, price, id_product) {
      this.name = product_name;
      this.price = price;
      this.id = id_product;
    }

    render() {
      return `<div class="goods-item">
                <h3>${this.name}</h3>
                <p>${this.price}</p>
                <button data-id="${this.id}" class="basket-btn" type="button">Купить</button>
            </div>`;
    }
  }

  class GoodsList {
    constructor() {
      this.goods = [];
    }

    sumPrice() {
      let summ = 0;
      this.goods.forEach((item) => {
        summ += item.price;
      });
      //console.log(summ)
    }

    fetchGoods() {
      return makeGETRequest(`${API_URL}/catalogData.json`);
    }
    render(listGoods) {
      let listHtml = "";
      listGoods.forEach((good) => {
        const goodItem = new GoodsItem(
          good.product_name,
          good.price,
          good.id_product
        );
        this.goods.push(goodItem);
        listHtml += goodItem.render();
      });
      document.querySelector(".goods-list").innerHTML = listHtml;
    }
    init() {
      const click = document.querySelector(".goods-list");

      click.addEventListener("click", (event) => {
        console.log(event.target);
        if (event.target.dataset["id"]) {
          catalog.goods.forEach((el) => {
            if (el.id === +event.target.dataset["id"]) {
              console.log(el);
              addGood(el);
            }
          });
        }
      });
    }
  }

  class BasketItem extends GoodsItem {
    constructor(name, parse, id) {
      super(name, parse, id);
      this.quantity = 1;
    }

    changeQuantity(count) {
      console.log(this.quantity);
      this.quantity += count;
      this._updateItem();
    }

    render() {
      return `<div class="basket-item" data-id="${this.id}">
                <h3>${this.name}</h3>
                <p class="product-price">${this.price}руб.</p>
                <p class="product-quantity">Количество: ${this.quantity}</p>
                <button data-id="${this.id}" class="basket-btn" type="button">&times;</button>
            </div>`;
    }

    _updateItem() {
      const block = document.querySelector(
        `.basket-item[data-id="${this.id}"]`
      );
      block.querySelector(
        ".product-quantity"
      ).textContent = `Количество: ${this.quantity}`;
      block.querySelector(".product-price").textContent = `${
        this.quantity * this.price
      }руб.`;
    }
  }

  class Basket {
    constructor() {
      this.items = [];
    }

    getBasket() {
      // получить содержимое корзины;
      fetch(`${API_URL}/getBasket.json`)
        .then((result) => result.json())
        .catch((error) => console.log(error));
    }

    addGood(item) {
      // добавить товар в корзину;
      return fetch(`${API_URL}/addToBasket.json`)
        .then((data) => data.json())
        .then((data) => {
          if (data.result) {
            let basketItem = new BasketItem(item.name, item.price, item.id);
            let find = this.items.find((el) => el.id === item.id);
            if (find) {
              basketItem.changeQuantity(1);

              console.log(basketItem.quantity);
            } else {
              this.items.push(item);
              let listBasket = document.querySelector(".basket");
              listBasket.innerHTML += basketItem.render();

              // console.log(basketItem.quantity)
            }
          } else {
            console.log("error");
          }
        });
    }

    removeGood() {
      // удалить товар из корзины.
      fetch(`${API_URL}/deleteFromBasket.json`)
        .then((result) => result.json())
        .catch((error) => console.log(error));
    }

    init() {
      const click = document.querySelector(".goods-list");

      click.addEventListener("click", (event) => {
        // console.log(event.target)
        if (event.target.dataset["id"]) {
          catalog.goods.forEach((item) => {
            if (item.id === +event.target.dataset["id"]) {
              // console.log(item)
              basket.addGood(item);
            }
          });
        }
      });
    }
  }

  const catalog = new GoodsList();
  const basket = new Basket();

  catalog.fetchGoods().then((result) => catalog.render(JSON.parse(result)));
  basket.init();
};
