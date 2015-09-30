'use strict';

/**
 * @ngdoc overview
 * @name fec3App
 * @description
 * # fec3App
 *
 * Main module of the application.
 */
angular
  .module('fec3App', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/aftersale', {
        templateUrl: 'views/aftersale.html',
        controller: 'aftersaleCtrl',
        controllerAs: 'aftersale'
      })
      .when('/landingpage', {
        templateUrl: 'views/landingpage.html',
        controller: 'landingpageCtrl',
        controllerAs: 'landingpage'
      })
      .when('/allproducts', {
        templateUrl: 'views/allproducts.html',
        controller: 'allproductsCtrl',
        controllerAs: 'allproducts'
      })
      .when('/saleiphone', {
        templateUrl: 'views/saleiphone.html',
        controller: 'saleiphoneCtrl',
        controllerAs: 'saleiphone'
      })
      .when('/orderDevice', {
        templateUrl: 'views/orderDevice.html',
        controller: 'orderDeviceCtrl',
        controllerAs: 'orderDevice'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
