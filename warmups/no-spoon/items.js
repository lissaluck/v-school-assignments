/* Jay's example
var chair = {
    color: "white",
    isAdjustable: true,
    isComfortable: false,
    heightSetting: 10,
    changeHeight: function (change) {
        if (change < 1 || change > 10) {
            console.log("Invalid setting!");
        } else {
            chair.heightSetting = change;
        }
        return chair.heightSetting;
    }
}
*/



var roomObjects = [];

var blanket {
    feature: "heated",
    material: "fleece",
    size: "queen",
    isOn: true
    turnOn: function () {
        this.isOn = true;
        console.log("Power: On");
    }
}

roomObjects.push(blanket);


var lotion {
    brand: "Jergens",
    type: "Ultra Healing",
    size: 26.5,
    quantity: 1,
    empty: false;
    buyMore: function() {
        this.empty = true;
        console.log("Add to shopping list.")
    }
    boughtMore {
        this.quantity++;
        console.log("You now have " + quantity + " bottles.")
    }
}
    
roomObjects.push(lotion);

    
var hat {
    type: "cowgirl",
    material: "straw",
    isEmbellished: true
}

roomObjects.push(hat);

var bottle {
    temperature: "cold",
    brand: "Contigo",
    type: "water"
}

roomObjects.push(bottle);

var needles {
    type: "knitting" [
        {
            size: 8,
            material: "wood",
            length: 10,
            type: "straight",
            brand: "Serenity"
        },
        {
            size: 10,
            meterial: "metal",
            type: "cicrcular",
            brand: "KnitPicks"
        },
    ]
}
        
roomObjects.push(needles);

var scissors {
    color: "pink",
    material: "steel",
    size: "large"
}

var laundryBasket {
    material: "plastic",
    color: "black",
    size: "double"
}

var television {
    brand: "Philips",
    size: 25,
    hdmi: true
}

var bunny {
    type: "plush",
    color: "white",
    nose: "pink"
}

var earrings {
    stone: "diamonds",
    size: "1/2 ct.",
    back: "screw"
}