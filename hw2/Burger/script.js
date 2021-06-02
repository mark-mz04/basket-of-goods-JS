window.onload = () => {

    class Burger {
        constructor(size, stuffing) {
            this.size = size
            this.stuffing = stuffing
            this.price = 0
            this.topping = []
            this.calories = 0
        }
        addTopping(topping) {
            this.topping.push(topping)
        }    // Добавить добавку 
        removeTopping(topping) {
            this.topping.forEach(item => {
                if (item === topping) {
                    let position = this.topping.indexOf(item)
                    this.topping.splice(position, 1)
                } else {
                    alert('Такой добавки у вас нет')
                }
                if (this.topping.length === 0) {
                    this.topping.push('Нет')
                }
            })
        } // Убрать добавку 
        calculatePrice() {
            if (this.size === 'Маленький') {
                this.price = 50
            } else {
                this.price = 100
            }

            if (this.stuffing === 'с сыром') {
                this.price += 10
            } else if (this.stuffing === 'с салатом') {
                this.price += 20
            } else {
                this.price += 15
            }

            this.topping.forEach(i => {
                if (i === 'майонез') {
                    this.price += 20
                } else if (i === 'приправа') {
                    this.price += 15
                }
            })
        }       // Узнать цену 
        calculateCalories() {
            if (this.size === 'Маленький') {
                this.calories = 20
            } else {
                this.calories = 40
            }

            if (this.stuffing === 'с сыром') {
                this.calories += 20
            } else if (this.stuffing === 'с салатом') {
                this.calories += 5
            } else {
                this.calories += 10
            }

            this.topping.forEach(i => {
                if (i === 'майонез') {
                    this.calories += 5
                }
            })
        }    // Узнать калорийность 
    }




    let size
    let stuf
    let topping

    while (size === undefined) {
        size = Number(prompt('Выберите размер бургера: \n 1 - Маленький; \n 2 - Большой.'))
        if (size === 1) {
            size = 'Маленький'
            break
        } else if (size === 2) {
            size = 'Большой'
            break
        } else {
            alert('Такого бургера нет.')
            size = undefined
        }
    }

    while (stuf === undefined) {
        stuf = Number(prompt('Выберите начинку: \n 1 - с сыром;\n 2 - с салатом; \n 3 - с картофелем.'))
        if (stuf === 1) {
            stuf = 'с сыром'
            break
        } else if (stuf === 2) {
            stuf = 'с салатом'
            break
        } else if (stuf === 3) {
            stuf = 'с картофелем'
            break
        } else {
            alert('Такой начинки нет.')
            stuf = undefined
        }
    }

    const burger = new Burger(size, stuf)

    while (topping === undefined) {
        topping = Number(prompt('Выберите добавки: \n 1 - майонез;\n 2 - приправы; \n 3 - обе; \n 4 - ничего не нужно'))
        if (topping === 1) {
            burger.addTopping('майонез')
            break
        } else if (topping === 2) {
            burger.addTopping('приправа')
            break
        } else if (topping === 3) {
            burger.addTopping('майонез')
            burger.addTopping('приправа')
            break
        } else if (topping === 4) {
            let check
            while (check === undefined) {
                check = Number(prompt('Вы уверены, что не хотите добавки? \n 1 - да; \n 2 - вернуться к выбору добавок'))
                if (check === 1) {
                    burger.addTopping('Нет')
                    break
                } else if (check === 2) {
                    topping = undefined
                } else {
                    alert('Указан неизвестный вариант')
                    check = undefined
                }
            }
        } else {
            alert('Такой добавки нет.')
            topping = undefined
        }
    }

    let removeTopping

    if (burger.topping[0] !== 'Нет') {
        while (removeTopping === undefined) {
            removeTopping = Number(prompt('Выберите добавки, которые нужно убрать: \n 1 - майонез;\n 2 - приправа; \n 3 - оставить как есть.'))
            if (removeTopping === 1) {
                burger.removeTopping('майонез')
                removeTopping = Number(prompt('Хотите убрать другие добавки? \n 1 - да;\n 2 - нет.'))
                if (removeTopping === 1) {
                    removeTopping = undefined
                } else if (removeTopping === 2) {
                    break
                } else {
                    alert('Указан не известный вариант')
                    removeTopping = undefined
                }
            } else if (removeTopping === 2) {
                burger.removeTopping('приправа')
                removeTopping = Number(prompt('Хотите убрать другие добавки? \n 1 - да;\n 2 - нет.'))
                if (removeTopping === 1) {
                    removeTopping = undefined
                } else if (removeTopping === 2) {
                    break
                } else {
                    alert('Указан не известный вариант')
                    removeTopping = undefined
                }
            } else if (removeTopping === 3) {
                break
            } else {
                alert('Указан не известный вариант')
                removeTopping = undefined
            }
        }
    }

    burger.calculatePrice()
    burger.calculateCalories()
    alert(`Ваш бургер: 
    Размер - ${burger.size} 
    Начинка - ${burger.stuffing}
    Добавки - ${burger.topping}
    Цена - ${burger.price}руб.
    Каллорийность - ${burger.calories}калл.`)













}