angular.module('tabs', ['ngMaterial', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {
    $stateProvider
    .state('home', {
      url: '/',
      data: { selectedTab: 0 },
      template: '<p>HOME</p>',
    })
    .state('portfolio', {
      url: '/portfolio',
      data: { selectedTab: 1 },
      template: "<p>'FOLIO</p>",
    })
    .state('contact', {
      url: '/contact',
      data: { selectedTab: 2 },
      template: "<p>'TACT</p>",
    })
  }
  ])
.controller('NavigationController', function($scope, $transitions) {
  $transitions.onSuccess({},
    function(transition) {
      var $state = transition.router.stateService
      var currentTab = $state.$current.data.selectedTab
      $scope.selectedTab = currentTab
    }
    )
})
