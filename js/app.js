var NaprosmotrSUApp = angular.module('NaprosmotrSUApp', [
    'ngRoute',
    'NaprosmotrSUControllers'
])

NaprosmotrSUApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'modules/object-list.html',
                controller: 'mainController'
            })
            .when('/add-news', {
                templateUrl: 'modules/add-news.html',
                controller: 'mainController'
            })
            .when('/add-object', {
                templateUrl: 'modules/add-object.html',
                controller: 'mainController'
            })
            .when('/news-list', {
                templateUrl: 'modules/news-list.html',
                controller: 'mainController'
            })
            . when('/news-list/:newsId', {
                templateUrl: 'modules/news-item.html',
                controller: 'NewsPageCtrl'
            })
            .when('/obj-modarate', {
                templateUrl: 'modules/obj-modarate.html',
                controller: 'mainController'
            })
            .when('/object-list', {
                templateUrl: 'modules/object-list.html',
                controller: 'mainController'
            })
            .when('/personal-settings', {
                templateUrl: 'modules/personal-settings.html',
                controller: 'mainController'
            })
            .when('/site-settings', {
                templateUrl: 'modules/site-settings.html',
                controller: 'mainController'
            })
            .when('/users', {
                templateUrl: 'modules/users.html',
                controller: 'mainController'
            });
    }]);