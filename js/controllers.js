var NaprosmotrSUControllers = angular.module('NaprosmotrSUControllers', []);

NaprosmotrSUControllers.controller('mainController', function($scope,$http,$routeParams) {

    $scope.objectLayout = 'ObjectList'; // страница (модель) по умолчанию

    // сортировка объектов:
    $scope.sortType = 'id'; // значение сортировки по умолчанию
    $scope.sortReverse = true;  // обратная сортировка
    $scope.searchObj = '';     // значение поиска по умолчанию

    // список объектов:
    $http.get('http://141.8.194.124:8080/estate/?format=json').success(function(data){
        $scope.objects = data["results"];
    });

    // список новостей:
    $http.get('http://141.8.194.124:8080/news/?format=json').success(function(data){
        $scope.news = data["results"];
    });



});

NaprosmotrSUControllers.controller('NewsPageCtrl',function($scope, $http, $routeParams){
    var id = $routeParams["newsId"];
    $http.get('http://141.8.194.124:8080/news/'+id+'?format=json').success(function(data){
        $scope.news = data;
    });
});
