angular.module("cartoonApp")

.service("CartoonService", [ function () {

    this.addCartoon = function (cartoon, cartoons) {
        cartoons.push(cartoon);
        return cartoons;
    }

}])

/**
 * Created by lissaluck on 3/28/17.
 */
