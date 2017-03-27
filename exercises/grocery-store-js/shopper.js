var shopper = {
    firstName: "Ellen",
    lastName: "Brooks",
    shopperCardNum: 400051698,
    isMember: true,
    greetFunc: function () {
        console.log("Hello valued customer!");
    },
    groceryCart: [
        {
            itemName: "bananas",
            category: "produce",
            price: 0.59,
            organic: true
        },
        {
            itemName: "milk",
            type: "Skim",
            category: "dairy",
            price: 2.29,
            organic: false
        },
        {
            itemName: "bread",
            type: "wheat",
            price: 2.59,
            sprouted: true
        },
        {
            itemName: "eggs",
            price: 1.89,
            cageFree: true
        }
    ],
    totalPrice: function () {
        var totalPrice = 0;
        for (var i = 0; i < this.groceryCart.length; i++) {
            totalPrice += this.groceryCart[i].price;
        }
        return totalPrice;
    }
}

shopper.greetFunc();
console.log(shopper.totalPrice());