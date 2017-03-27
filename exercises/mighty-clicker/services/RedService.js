angular.module("myApp")

.service("RedService", [function () {

    this.redCounter = 100;

    this.increment = function () {
        this.redCounter++;
        return this.redCounter;
    }

    this.decrement = function () {
        this.redCounter--;
        if (this.redCounter === 0) {
            this.reset();
        }
        return this.redCounter;
    }

    this.reset = function () {
        this.redCounter = 100;
    }
}]);