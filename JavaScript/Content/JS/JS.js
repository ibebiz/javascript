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
    $scope.ctitems = [
        {
            id: 1,
            mota: 'Thiết kế quen thuộc \n Thiết kế của chiếc iPhone 7 Plus 256 GB không có nhiều điểm khác biệt so với người anh em iPhone 6s Plus năm ngoái. Mặt lưng chính là điểm nổi bật nhất của  iPhone 7 Plus 256 GB với bộ đôi camera kép lồi hẳn lên.'
        },
        {
            id: 2,
            mota: 'Đây là mô tả thông tin điện thoại Thông số kỹ thuật \n Màn hình:	IPS LCD, 4", WVGA \n Hệ điều hành:	Windows Phone 8 \n Camera sau:	5 MP \n Camera trước:	Không \n CPU:	Qualcomm MSM8227, 1 GHz \n Bộ nhớ trong:	8 GB \n Hỗ trợ thẻ nhớ:	MicroSD, 64 GB \n Thẻ SIM:	1 SIM, Micro SIM \n Dung lượng pin:	1430 mAh \n Thiết kế:	Pin rời'
        },
        {
            id: 3,
            mota: 'Điện thoại BLACKBERRY Z10'
        },
        {
            id: 4,
            mota: 'Đây là mô tả thông tin điện thoại SamSung Galaxy S7 Edge'
        }
    ];
    $scope.myItems = [];
    $scope.ttctItem = [];
    $scope.ttItem = function (newItem) {
        
        for(var i = 0; i < $scope.ctitems.length; i++)
        {
            if ($scope.ctitems[i].id == newItem.id) {
                $scope.ttctItem.push($scope.ctitems[i]);
            }
        }
    };
    $scope.addItem = function (newItem) {
        if ($scope.myItems.length == 0) {
            newItem.count = 1;
            $scope.myItems.push(newItem);
        }
        else {
            var repeat = false;
            for (var i = 0; i < $scope.myItems.length; i++) {
                if (window.CP.shouldStopExecution(1)) {
                    break;
                }
                if ($scope.myItems[i].id == newItem.id) {
                    $scope.myItems[i].count++;
                    repeat = true;
                }
            }
            window.CP.exitedLoop(1);
            if (!repeat) {
                newItem.count = 1;
                $scope.myItems.push(newItem);
            }
        }
        updatePrice();
    };
    var updatePrice = function () {
        var totalPrice = 0;
        for (var i = 0; i < $scope.myItems.length; i++) {
            if (window.CP.shouldStopExecution(2))
            {
                break;
            }
            totalPrice += ($scope.myItems[i].count) * ($scope.myItems[i].price);
        }
        window.CP.exitedLoop(2);
        $scope.totalPrice = totalPrice;
    };
    $scope.removeBasket = function () {
        $scope.myItems.splice(0, $scope.myItems.length);
        updatePrice();
    };
});
app.filter('reverse', function () {
    return function (items) {
        var x = items.slice().reverse();
        if (items.length > 1) {
            angular.element('#ok tr').css('background', '#fff');
            angular.element('#ok tr').filter(':first').css('background', 'lightyellow');
            setTimeout(function () {
                angular.element('#ok tr').filter(':first').css('background', '#fff');
            }, 500);
        }
        return x;
    };
});
//# sourceURL=pen.js