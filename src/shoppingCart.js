class shoppingCart {
    constructor(name, quantity, pricePerUnit) {
        this.items = []
    }
    getItems() {
        return this.items;

    }
    addItem(name, quantity, pricePerUnit) {
        this.items.push({name,quantity,pricePerUnit})
    }
    clear() {
        this.items = []
    }
    total(){
        return this.items.reduce((acc,next)=> {
            return acc + next.quantity * next.pricePerUnit
        },0)
    }
}

module.exports = shoppingCart;