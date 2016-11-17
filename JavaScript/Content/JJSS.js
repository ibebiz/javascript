var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.Ho = "Nguyễn";
    $scope.Ten = "Tiến Đạt";
    $scope.fullName = function () {
        return $scope.Ho + " " + $scope.Ten;
    };
});