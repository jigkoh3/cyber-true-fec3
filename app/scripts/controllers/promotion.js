'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('promotionCtrl', function($scope) {
        $scope.indexPage=1;
        $scope.trueProduct = {
            productName: "IPhone 6 Plus",
            productImg: "iPhone_6_Plus",
            productColor: [{
                    colorName: "Gold",
                    colorImg: "gold",
                    memSize: [{
                        sizeName: "16 GB",
                        price: "29450.00",
                        piece: ""
                    }, {
                        sizeName: "64 GB",
                        price: "33400.00",
                        piece: ""
                    }, {
                        sizeName: "128 GB",
                        price: "37300.00",
                        piece: ""
                    }]
                }, {
                    colorName: "Silver",
                    colorImg: "silver",
                    memSize: [{
                        sizeName: "16 GB",
                        price: "29450.00",
                        piece: ""
                    }, {
                        sizeName: "64 GB",
                        price: "33400.00",
                        piece: ""
                    }, {
                        sizeName: "128 GB",
                        price: "37000.00",
                        piece: ""
                    }]
                }, {
                    colorName: "Black",
                    colorImg: "black",
                    memSize: [{
                        sizeName: "16 GB",
                        price: "29450.00",
                        piece: ""
                    }, {
                        sizeName: "64 GB",
                        price: "33400.00",
                        piece: ""
                    }, {
                        sizeName: "128 GB",
                        price: "37300.00",
                        piece: ""
                    }]


                }

            ]

        };

        $scope.total = 0;
        $scope.calculate = function(item) {
            // console.log($scope.trueProduct.productColor[0].memSize);
            var total = 0;
            angular.forEach($scope.trueProduct.productColor, function(itm) {
                var totalByColor = 0;
                angular.forEach(itm.memSize, function(item) {

                        totalByColor += item.price * item.piece;

                        // console.log($scope.total);
                    })
                    //console.debug(totalByColor);
                total += totalByColor;

            })
            return total;
            //$scope.total += item.price * item.piece;

        }

        $scope.count = function(item) {
            // console.log($scope.trueProduct.productColor[0].memSize);
            var total = 0;
            angular.forEach($scope.trueProduct.productColor, function(itm) {

                    angular.forEach(itm.memSize, function(item) {

                        total += item.piece;

                    })


                })
                //console.debug(total);
            return total;


        }


        $scope.detail = "";
        $scope.preDetail = function(item) {
            // console.log($scope.trueProduct.productColor[0].memSize);
            var detail = "";
            angular.forEach($scope.trueProduct.productColor, function(itm) {
                var sizeDetail = "";
                angular.forEach(itm.memSize, function(item) {

                    sizeDetail == item.sizeName

                    // console.log($scope.total);
                })
                console.debug(sizeDetail);
                detail == sizeDetail;

            })
            return detail;
            //$scope.total += item.price * item.piece;

        }


        $scope.IsVisible = false;
        $scope.ShowHide = function() {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.IsVisible ? false : true;

        }

        $scope.promotion = function() {
            window.location = "#/promotionDevice";
        };
        $scope.buyDevice = function() {
            window.location = "#/listPayment";
        };

        $scope.openTruemove = function(){
            $scope.indexPage +=1;
        };
    });