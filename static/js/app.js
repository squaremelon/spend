window.app = angular.module('spendApp', [
  'ui.router',
  'ngAnimate'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise("/nope");

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "./static/js/templates/home.html"
  })
  .state('settings', {
    url: "/settings",
    templateUrl: "./static/js/templates/settings.html"
  })
  .state('profile', {
    url: "/profile",
    templateUrl: "./static/js/templates/profile.html"
  })
  .state('nope', {
    url: "/nope",
    templateUrl: "./static/js/templates/nope.html"
  })
});
