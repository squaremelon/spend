window.app = angular.module('spendApp', [
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.hashPrefix('🍉');

  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('base', {
    url: "/",
    templateUrl: "./static/js/templates/base.html"
  })
  .state('settings', {
    url: "/settings",
    templateUrl: "./static/js/templates/settings.html"
  })
  .state('nope', {
    url: "/nope",
    templateUrl: "./static/js/templates/nope.html"
  })
});
