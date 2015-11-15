/**
 * @preserve (c) 2015 Eugene V. Boiko
 * minskelectroshop@gmail.com
 *
 */
(function() {
    angular.module('dentModule', [])
    .controller('MainController', ['$scope', function ($scope) {

        this.showAbout = function() {
          $scope.state = 'about';
        };

        this.showServices = function() {
          $scope.state = 'services';
        };

        this.showTherapy = function() {
          $scope.state = 'therapy';
        };
        this.showOrthopedics = function() {
          $scope.state = 'orthopedics';
        };
        this.showPrevention = function() {
          $scope.state = 'prevention';
        };
        this.showWhitening = function() {
          $scope.state = 'whitening';
        };
        this.showXrays = function() {
          $scope.state = 'xrays';
        };

        this.showInfo = function() {
          $scope.state = 'info';
        };

        this.showPrices = function() {
          $scope.state = 'prices';
        };

        this.showContacts = function() {
          $scope.state = 'contacts';
        };

        $scope.state = 'about';

    }]);
})();