'use strict';

/**
 * @preserve (c) 2015 Eugene V. Boiko
 * minskelectroshop@gmail.com
 *
 */
(function() {
    angular.module('dentModule', [])
    .controller('MainController', ['$scope', function ($scope) {

        this.showSoc = function(id) {
            var h = encodeURIComponent(location.toString());
            var t = encodeURIComponent(document.title);
            switch (id) {
                case 1: h = 'vkontakte.ru/share.php?url=' + h + '&title=' + t; break;
                case 2: h = 'odnoklassniki.ru/dk?st.cmd=addShare&st.s=1000&st._surl=' + h + '&tkn=3009'; break;
                case 3: h = 'www.livejournal.com/update.bml?mode=full&subject=' + t + '&event=' + h; break;
                case 4: h = 'twitter.com/timeline/home?status=' + t + '%20' + h; break;
                case 5: h = 'www.facebook.com/share.php?u=' + h; break;
                case 6: h = 'wow.ya.ru/posts_share_link.xml?url=' + h + '&title=' + t; break;
                case 7: h = 'connect.mail.ru/share?url=' + h + '&title=' + t + '&description=&imageurl='; break;
                case 8: h = 'moikrug.ru/share?ie=utf-8&url=' + h + '&title=' + t + '&description='; break;
                default:
            }
            window.open('http://' + h, 'Soc', 'screenX=100,screenY=100,height=500,width=500,location=no,toolbar=no,directories=no,menubar=no,status=no');
        };

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