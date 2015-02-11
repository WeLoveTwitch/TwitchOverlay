TwitchOverlay.directive('header', ['TwitchOverlayServer', function(TwitchOverlayServer) {
    return {
        restrict: 'E',
        templateUrl: 'configuration-frontend/templates/directives/header.html',
        link: function($scope) {
            var gui = require('nw.gui');
            var win = gui.Window.get();

            $scope.goFullscreen = function() {
                win.toggleFullscreen();
            };

            $scope.showDevTools = function() {
                win.showDevTools();
            };

            $scope.reload = function() {
                TwitchOverlayServer.stop();
                win.reloadIgnoringCache();
            };

            $scope.closeApplication = function() {
                gui.App.closeAllWindows();
            };
        }
    }
}]);