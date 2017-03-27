angular.module("myApp")

.service("BlueService", [function () {

    this.blueCounter = 100;

    this.increment = function () {
        this.blueCounter++;
        return this.blueCounter;
    }

    this.decrement = function () {
        this.blueCounter--;
        if (this.blueCounter === 0) {
            this.reset();
        }
        return this.blueCounter;
    }

    this.reset = function () {
        this.blueCounter = 100;
    }
}]);