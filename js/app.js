angular.module('naprosmotrSUApp', [])

    .controller('mainController', function($scope,$http) {

        $scope.objectLayout = 'ObjectList'; // страница (модель) по умолчанию

        // сортировка объектов:
        $scope.sortType = 'title'; // значение сортировки по умолчанию
        $scope.sortReverse = false;  // обратная сортировка
        $scope.searchObj = '';     // значение поиска по умолчанию

        // список объектов:
        $scope.objects = [
            {title: 'Коломяжский 25', photo: 'IMG', status: 'Опубликовано', shows: 25, comments: 45},
            {title: 'Богатырский 48', photo: 'IMG', status: 'На модерации', shows: 55, comments: 4},
            {title: 'Культуры 22', photo: 'IMG', status: 'Опубликовано', shows: 677, comments: 5},
            {title: 'Испытателей 15', photo: 'IMG', status: 'Опубликовано', shows: 234, comments: 325},
            {title: 'Шоссе Революции 1', photo: 'IMG', status: 'Отклонено', shows: 2, comments: 41},
            {title: 'Гаккелевская 12', photo: 'IMG', status: 'Опубликовано', shows: 1095, comments: 2},
            {title: 'Площадь Мужества 5', photo: 'IMG', status: 'Опубликовано', shows: 124, comments: 15},
            {title: 'Коломяжский 48', photo: 'IMG', status: 'Опубликовано', shows: 76, comments: 21},
            {title: 'Просвещения 48', photo: 'IMG', status: 'Черновик', shows: 38, comments: 2}
        ];

        // список новостей:
        $http.get('http://141.8.194.124:8080/news/?format=json').success(function(data){
            $scope.news = data["results"];
        });
    });