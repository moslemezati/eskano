/**
 * Created by moslem on 7/27/2016.
 */
angular.module('appRoutes', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: '/production/components/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });
