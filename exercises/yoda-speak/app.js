angular.module("YodaApp", [])

.controller("YodaController", ['$scope', '$http', function ($scope, $http) {

    $scope.yodaSpeak = function (phrase) {

        var config = {
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };
        
        function successCallback(response) {
            $scope.yodaSpeak = response.data;
        }
        
        function errorCallback(response) {
            $scope.yodaSpeak = "API is down again... :/"
        }
        
        $http.get('https://yoda.p.mashape.com/yoda?sentence=' + phrase, config)
            .then(successCallback, errorCallback);
    }
}]);
