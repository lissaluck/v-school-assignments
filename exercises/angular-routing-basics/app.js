angular.module("RoutingApp",["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "/components/home/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "/components/about/about.html",
            controller: "AboutController"
        })
        .when("/whyilove", {
            templateUrl: "/components/whyilove/whyilove.html",
            controller: "WhyILoveController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);