
// (function () {
//    'use strict';

var guia = angular.module('guia', [
   'ngRoute',
   'firebase',
   'authService'
]);

guia.config(['$routeProvider', function ($routeProvider) {
   $routeProvider
      .when('/', {
         templateUrl: './app/templates/home.html',
         controller: 'homeCtrl'

      })
      .when('/login', {
         templateUrl: './app/templates/login.html',
         controller: 'loginCtrl'

      })
      .when('/cadastro', {
         templateUrl: './app/templates/cadastro.html',
         controller: 'cadCtrl'

      })
      //configs
      .when('/config', {
         templateUrl: './app/templates/config.html',
         controller: 'configCtrl'

      })
      .when('/recuperaSenha', {
         templateUrl: './app/templates/recuperaSenha.html',
         controller: 'passRecCtrl'

      })
   var config = {
      apiKey: "AIzaSyDdfTXZ5gjOVAvv1g_JBUPI7kdE_ZWPUGM",
      authDomain: "guiavirtual-2fc2c.firebaseapp.com",
      databaseURL: "https://guiavirtual-2fc2c.firebaseio.com",
      projectId: "guiavirtual-2fc2c",
      storageBucket: "guiavirtual-2fc2c.appspot.com",
      messagingSenderId: "217042758455",
      appId: "1:217042758455:web:ccc558981a11bfef0548b2",
      measurementId: "G-V6S3VHV42K"

   };
   firebase.initializeApp(config);
}]);