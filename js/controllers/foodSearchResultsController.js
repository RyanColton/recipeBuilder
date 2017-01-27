angular.module('recipeApp')
.controller('foodSearchResultsController', function($scope, $state, mainService){
  $scope.pullFoodNutrition = function(){
    mainService.nutritionData().then(function(response){
      $scope.foodNutrition = response.data.report
      $scope.protien = $scope.foodNutrition.food.nutrients[2].value
      $scope.carbs = $scope.foodNutrition.food.nutrients[4].value
      $scope.fat = $scope.foodNutrition.food.nutrients[3].value
      $scope.labels = ['Protien', 'Carbohydrates', 'Total Fat']
      $scope.triData = [$scope.protien,$scope.carbs,$scope.fat]
      console.log($scope.triData)
    })
  }
  $scope.pullFoodNutrition()





})
