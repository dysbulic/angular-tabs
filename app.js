angular.module('tabs', ['ngMaterial', 'ui.router'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => {
            $stateProvider
                .state('home', {
                    url: '/',
                    data: {
                        'selectedTab' : 0
                    },
                    templateUrl: 'app/components/main/main.html',
                    controller: 'MainController as vm'
                })
                .state('portfolio', {
                    url: '/portfolio',
                    data: {
                        'selectedTab' : 1
                    },
                    templateUrl: 'app/components/portfolio/portfolio.html',
                    controller: 'PortfolioController as vm'
                })
                .state('contact', {
                    url: '/contact',
                    data: {
                        'selectedTab' : 2
                    },
                    templateUrl: 'app/components/contact/contact.html',
                    controller: 'ContactController as vm'
                });
        }
        
    ])
