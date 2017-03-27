//var Player(name, coins, status, star, namePicked, gemActive, gameActive) {
//        this.name = name;
//        this.coins = totalCoins;
//        this.status = Boolean;
//        this.star = false;
//        this.setName = function (namePicked) {
//
//        }
//        gotHit
//        this.gemActive = false;
//        this.printPlayer = function () {
//            console.log(
//                "Name: " + this.name + ", Status: " + this.status + ", Total Coins: " + this.coins;
//            );
//            gameActive = true;
//        }
//
//        function randomRange() {
//            randomInt = Math.floor(Math.random * 3);
//            if (randomInt === 0) {
//                gothit();
//            } else if (randomInt === 0) {
//                gotPowerup();
//            } else {
//                addCoin();
//            }
//        }




var player = {
    name: "Mario",
    totalCoins: 0,
    status: "Small",
    star: false,
    setName: function (namePicked) {
        this.name = namePicked;
    },

    gotHit: function () {

        switch (this.status) {
        case "Powered Up":
            this.status = "Big";
            break;
        case "Big":
            this.status = "Small";
        case "Small":
            this.status = "Dead";
            this.gameActive = false;
            break;
        default:
            break;
        }
    },

    gotPowerUp: function () {

        switch (this.status) {
        case "Small":
            this.status = "Big";
        case "Big":
            this.status = "Powered Up";
            break;
        default:
            break;
        }

    },

    gameActive: true,
    addCoin: function () {
        this.totalCoins++;
    },
    print: function () {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotalCoins: ${this.totalCoins}\nStar: ${this.star}`);
    },
}

player.setName("Luigi")
player.print();
player.addCoin();
player.addCoin();
player.addCoin();
player.addCoin();
player.addCoin();
player.addCoin();
player.gotPowerUp();
player.gotPowerUp();
player.star = true;
player.print();