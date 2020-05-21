'use strict';
var guia = angular.module("guia");

guia.controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ['$scope'];

function homeCtrl($scope) {
    var vm = $scope;

    //Autocomplete

    $scope.user = { 'from': '', 'fromLat': '', 'fromLng': '' };
    var options = {
        componentRestrictions: { country: "in" }
    };
    var inputFrom = document.getElementById('from');
    var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom, options);
    google.maps.event.addListener(autocompleteFrom, 'place_changed', function () {
        var place = autocompleteFrom.getPlace();
        $scope.user.fromLat = place.geometry.location.lat();
        $scope.user.fromLng = place.geometry.location.lng();
        $scope.user.from = place.formatted_address;
    });
    //Implementa Mapa 


}