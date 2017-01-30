'use strict';

angular.module('recipeApp', ['ui.router', 'chart.js', 'ui.grid', 'tc.chartjs']).config(function ($stateProvider, $urlRouterProvider, ChartJsProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeController'
  }).state('recipeNamer', {
    url: '/nameRecipe',
    templateUrl: './views/recipeNamer.html',
    controller: 'recipeNameController'
  }).state('recipeBuilder', {
    url: '/recipeBuilder',
    templateUrl: './views/recipeBuilder.html',
    controller: 'recipeBuilderController'
  }).state('recipeResults', {
    url: '/recipeResults',
    templateUrl: './views/recipeResults.html',
    controller: 'recipeResultsController'
  }).state('foodSearch', {
    url: '/search',
    templateUrl: './views/foodSearch.html',
    controllers: 'foodSearchController'
  }).state('foodSearchResults', {
    url: '/searchResults',
    templateUrl: './views/foodSearchResults.html',
    controllers: 'foodSearchResultsController'
  });

  ChartJsProvider.setOptions({
    tooltips: {
      enabled: true,
      mode: 'point'
    }
  });
});
"use strict";
'use strict';

angular.module('recipeApp').controller('foodSearchResultsController', function ($scope, $state, mainService) {
  $scope.showNut = false;
  $scope.labels = ['Protien', 'Carbohydrates', 'Total Fat'];
  $scope.colors = ['#00ADF9', '#5AD640', '#FDB45C', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];
  $scope.randomPoint = function () {
    return Math.floor(Math.random() * 100 + 15);
  };

  $scope.pullFoodNutrition = function () {
    mainService.nutritionData().then(function (response) {
      $scope.foodNutrition = response.data.report;
      $scope.protien = $scope.foodNutrition.food.nutrients[2];
      $scope.carbs = $scope.foodNutrition.food.nutrients[4];
      $scope.fat = $scope.foodNutrition.food.nutrients[3];
      $scope.water = $scope.foodNutrition.food.nutrients[0];
      $scope.calcium = $scope.foodNutrition.food.nutrients[7];
      $scope.iron = $scope.foodNutrition.food.nutrients[8];
      $scope.magnesium = $scope.foodNutrition.food.nutrients[9];
      $scope.phosphorus = $scope.foodNutrition.food.nutrients[10];
      $scope.potassium = $scope.foodNutrition.food.nutrients[11];
      $scope.sodium = $scope.foodNutrition.food.nutrients[12];
      $scope.zinc = $scope.foodNutrition.food.nutrients[13];
      $scope.vitaminC = $scope.foodNutrition.food.nutrients[14];
      $scope.thiamin = $scope.foodNutrition.food.nutrients[15];
      $scope.riboflavin = $scope.foodNutrition.food.nutrients[16];
      $scope.niacin = $scope.foodNutrition.food.nutrients[17];
      $scope.vitaminB6 = $scope.foodNutrition.food.nutrients[18];
      $scope.trilabels = ['Protien', 'Carbohydrates', 'Total Fat'];
      $scope.triData = [$scope.protien.value, $scope.carbs.value, $scope.fat.value];
      $scope.percentage = function (nutrient) {
        if (nutrient.nutrient_id == 0) {
          return 0;
        }
        for (var i = 0; i < mainService.dailyRecomendedValue.length; i++) {
          if (nutrient.nutrient_id == mainService.dailyRecomendedValue[i].nutrientId) {
            var result = nutrient.value * 100 / parseInt(mainService.dailyRecomendedValue[i].value);
            return Math.round(result * 100) / 100;
          }
        }
      };
      $scope.chartData = {
        datasets: [{
          label: 'Calcium',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.calcium)
          }],
          backgroundColor: "#ff6384",
          hoverBackgroundColor: "#FF6384",
          hoverRadius: 1
        }, {
          label: 'Iron',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.iron)
          }],
          backgroundColor: "#fcff63",
          hoverBackgroundColor: "#fcff63",
          hoverRadius: 1
        }, {
          label: 'Magnesium',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.magnesium)
          }],
          backgroundColor: "#63ffde",
          hoverBackgroundColor: "#63ffde",
          hoverRadius: 1
        }, {
          label: 'Phosphorus',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.phosphorus)
          }],
          backgroundColor: "#db4bff",
          hoverBackgroundColor: "#db4bff",
          hoverRadius: 1
        }, {
          label: 'Sodium',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.sodium)
          }],
          backgroundColor: "#ffe38e",
          hoverBackgroundColor: "#ffe38e",
          hoverRadius: 1
        }, {
          label: 'Zinc',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.zinc)
          }],
          backgroundColor: "#00aa6d",
          hoverBackgroundColor: "#00aa6d",
          hoverRadius: 1
        }, {
          label: 'Vitamin C',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.vitaminC)
          }],
          backgroundColor: "#f54e4e",
          hoverBackgroundColor: "#f54e4e",
          hoverRadius: 1
        }, {
          label: 'Thiamin',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.thiamin)
          }],
          backgroundColor: "#938eff",
          hoverBackgroundColor: "#938eff",
          hoverRadius: 1
        }, {
          label: 'Riboflavin',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.riboflavin)
          }],
          backgroundColor: "#1f28ff",
          hoverBackgroundColor: "#1f28ff",
          hoverRadius: 1
        }, {
          label: 'Niacin',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.niacin)
          }],
          backgroundColor: "#62ff68",
          hoverBackgroundColor: "#62ff68",
          hoverRadius: 1
        }, {
          label: 'Vitamin B-6',
          data: [{
            x: $scope.randomPoint(),
            y: $scope.randomPoint(),
            r: $scope.percentage($scope.vitaminB6)
          }],
          backgroundColor: "#39d083",
          hoverBackgroundColor: "#39d083",
          hoverRadius: 1
        }]
      };

      $scope.showNut = true;
      console.log($scope.riboflavin);
    });
  };
  $scope.pullFoodNutrition();

  $scope.chartOptions = {
    tooltips: {
      mode: 'dataset'
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false,
          min: 0,
          max: 150,
          stepSize: 0.5
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false,
          min: 0,
          max: 150,
          stepSize: 0.5
        }
      }]
    }

  };

  $scope.onChartClick = function (event) {
    console.log('BubbleController', 'onChartClick', event);
  };
});
'use strict';

angular.module('recipeApp').controller('homeController', function ($scope, mainService) {});
"use strict";
"use strict";
'use strict';

angular.module('recipeApp').directive('searchDir', function () {
  return {
    restirct: 'E',
    templateUrl: './js/directives/direcTemps/searchDir.html',
    controller: 'searchDirCtrl'
  };
});
'use strict';

angular.module('recipeApp').directive('searchResultDir', function () {
  return {
    restirct: 'E',
    templateUrl: './js/directives/direcTemps/searchResultDir.html',
    controller: 'foodSearchResultsController'
  };
});
'use strict';

angular.module('recipeApp').service('mainService', function ($http, $q) {
  this.searchFoodList = function (searchTerm) {
    return $http({
      method: 'GET',
      url: 'http://api.nal.usda.gov/ndb/search/?format=json&q=' + searchTerm + '&sort=r&max=30&ds=Standard Reference&api_key=gSF86FdjQ4LaECs7MXJ9m9aHjs5q8E4I4oKiw3uh&nutrients=205&nutrients=204&nutrients=208&nutrients=269'
    });
  };

  this.foodId = 0;

  this.nutritionData = function () {
    return $http({
      method: 'GET',
      url: 'http://api.nal.usda.gov/ndb/reports/?ndbno=' + this.foodId + '&type=b&format=json&api_key=gSF86FdjQ4LaECs7MXJ9m9aHjs5q8E4I4oKiw3uh'
    });
  };

  this.dailyRecomendedValue = [{
    nutrient: 'calcium',
    nutrientId: 301,
    value: 1000
  }, {
    nutrient: 'iron',
    nutrientId: 303,
    value: 18
  }, {
    nutrient: 'vitamin C',
    nutrientId: 401,
    value: 60
  }, {
    nutrient: 'sodium',
    nutrientId: 307,
    value: 2400
  }, {
    nutrient: 'magnesium',
    nutrientId: 304,
    value: 400
  }, {
    nutrient: 'phosphorus',
    nutrientId: 305,
    value: 1000
  }, {
    nutrient: 'potassium',
    nutrientId: 306,
    value: 3500
  }, {
    nutrient: 'zinc',
    nutrientId: 309,
    value: 15
  }, {
    nutrient: 'thiamin',
    nutrientId: 404,
    value: 1.5
  }, {
    nutrient: 'riboflavin',
    nutrientId: 405,
    value: 1.5
  }, {
    nutrient: 'niacin',
    nutrientId: 406,
    value: 20
  }, {
    nutrient: 'vitamin B-6',
    nutrientId: 415,
    value: 2
  }];
});
'use strict';

angular.module('recipeApp').controller('searchDirCtrl', function ($scope, $state, mainService, uiGridConstants) {

  $scope.food = true;
  $scope.searchResults = [{ group: "Group Name",
    name: "Item Name",
    ndbno: "12345" }];
  $scope.grabFoodId = function (row) {
    mainService.foodId = row.entity.ndbno;
    $scope.foodId = mainService.foodId;
    $state.go('foodSearchResults');
    console.log($scope.foodId);
  };
  $scope.gridOptions = {
    enableSorting: true,
    columnDefs: [{ field: 'name', displayName: 'Name' }, { field: 'group', displayName: 'Group' }, { field: 'ndbno', displayName: 'NDBNO' }, { field: 'function', cellTemplate: '<div class="grid-button" ng-click="grid.appScope.grabFoodId(row)">See nutrition</div>', displayName: 'See Nutrition' }],
    data: 'searchResults',
    excessRows: '4'
  };
  $scope.getSearchResults = function () {
    mainService.searchFoodList($scope.searchTerm).then(function (response) {
      $scope.searchResults = response.data.list.item;

      $scope.food = true;
    });
  };
});
//# sourceMappingURL=bundle.js.map
