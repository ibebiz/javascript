var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.items = [
        {
            id: 1,
            name: 'iphone7',
            price: 2500
        },
        {
            id: 2,
            name: 'Lumia 520',
            price: 500
        },
        {
            id: 3,
            name: 'BlackBerry Z10',
            price: 1500
        },
        {
            id: 4,
            name: 'SamSung Galaxy S7 Edge',
            price: 2000
        }
    ];
            
});