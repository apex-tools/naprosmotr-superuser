angular.module('naprosmotrSUApp', [])

    .controller('mainController', function($scope) {

        $scope.objectLayout = 'ObjectList';

        $scope.sortType = 'name'; // значение сортировки по умолчанию
        $scope.sortReverse = false;  // обратная сортировка
        $scope.searchObj = '';     // значение поиска по умолчанию

        // список
        $scope.objects = [
            {name: 'Коломяжский 25', photo: 'IMG', status: 'Опубликовано', shows: 25, comments: 45},
            {name: 'Богатырский 48', photo: 'IMG', status: 'На модерации', shows: 55, comments: 4},
            {name: 'Культуры 22', photo: 'IMG', status: 'Опубликовано', shows: 677, comments: 5},
            {name: 'Испытателей 15', photo: 'IMG', status: 'Опубликовано', shows: 234, comments: 325},
            {name: 'Шоссе Революции 1', photo: 'IMG', status: 'Отклонено', shows: 2, comments: 41},
            {name: 'Гаккелевская 12', photo: 'IMG', status: 'Опубликовано', shows: 1095, comments: 2},
            {name: 'Площадь Мужества 5', photo: 'IMG', status: 'Опубликовано', shows: 124, comments: 15},
            {name: 'Коломяжский 48', photo: 'IMG', status: 'Опубликовано', shows: 76, comments: 21},
            {name: 'Просвещения 48', photo: 'IMG', status: 'Черновик', shows: 38, comments: 2}
        ];

    });