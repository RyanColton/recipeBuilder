angular.module('recipeApp')
.controller('foodSearchResultsController', function($scope, $state, mainService){
  $scope.showNut = false
  $scope.labels = ['Protien', 'Carbohydrates', 'Total Fat']
  $scope.colors = [ '#00ADF9', '#5AD640', '#FDB45C', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
  $scope.randomPoint = function(){
    return Math.floor((Math.random() * 100) + 15)
  }

  $scope.pullFoodNutrition = function(){
    mainService.nutritionData().then(function(response){
      $scope.foodNutrition = response.data.report
      $scope.protien = $scope.foodNutrition.food.nutrients[2]
      $scope.carbs = $scope.foodNutrition.food.nutrients[4]
      $scope.fat = $scope.foodNutrition.food.nutrients[3]
      $scope.water = $scope.foodNutrition.food.nutrients[0]
      $scope.calcium = $scope.foodNutrition.food.nutrients[7]
      $scope.iron = $scope.foodNutrition.food.nutrients[8]
      $scope.magnesium = $scope.foodNutrition.food.nutrients[9]
      $scope.phosphorus = $scope.foodNutrition.food.nutrients[10]
      $scope.potassium = $scope.foodNutrition.food.nutrients[11]
      $scope.sodium = $scope.foodNutrition.food.nutrients[12]
      $scope.zinc = $scope.foodNutrition.food.nutrients[13]
      $scope.vitaminC = $scope.foodNutrition.food.nutrients[14]
      $scope.thiamin = $scope.foodNutrition.food.nutrients[15]
      $scope.riboflavin = $scope.foodNutrition.food.nutrients[16]
      $scope.niacin = $scope.foodNutrition.food.nutrients[17]
      $scope.vitaminB6 = $scope.foodNutrition.food.nutrients[18]
      $scope.trilabels = ['Protien', 'Carbohydrates', 'Total Fat']
      $scope.triData = [$scope.protien.value,$scope.carbs.value,$scope.fat.value]
      $scope.percentage = function(nutrient){
        if (nutrient.nutrient_id == 0){return 0}
        for(var i = 0; i < mainService.dailyRecomendedValue.length; i++){
          if(nutrient.nutrient_id == mainService.dailyRecomendedValue[i].nutrientId){
            var result = nutrient.value * 100 / parseInt(mainService.dailyRecomendedValue[i].value)
            return Math.round(result * 100) / 100
          }
        }
      }
      $scope.chartData = {
        datasets: [
          {
            label: 'Calcium',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.calcium)
              },
            ],
            backgroundColor:"#ff6384",
            hoverBackgroundColor: "#FF6384",
            hoverRadius: 1,
          },
          {
            label: 'Iron',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.iron)
              },
            ],
            backgroundColor:"#fcff63",
            hoverBackgroundColor: "#fcff63",
            hoverRadius: 1,
          },
          {
            label: 'Magnesium',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.magnesium)
              },
            ],
            backgroundColor:"#63ffde",
            hoverBackgroundColor: "#63ffde",
            hoverRadius: 1,
          },
          {
            label: 'Phosphorus',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.phosphorus)
              },
            ],
            backgroundColor:"#db4bff",
            hoverBackgroundColor: "#db4bff",
            hoverRadius: 1,
          },
          {
            label: 'Sodium',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.sodium)
              },
            ],
            backgroundColor:"#ffe38e",
            hoverBackgroundColor: "#ffe38e",
            hoverRadius: 1,
          },
          {
            label: 'Zinc',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.zinc)
              },
            ],
            backgroundColor:"#00aa6d",
            hoverBackgroundColor: "#00aa6d",
            hoverRadius: 1,
          },
          {
            label: 'Vitamin C',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.vitaminC)
              },
            ],
            backgroundColor:"#f54e4e",
            hoverBackgroundColor: "#f54e4e",
            hoverRadius: 1,
          },
          {
            label: 'Thiamin',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.thiamin)
              },
            ],
            backgroundColor:"#938eff",
            hoverBackgroundColor: "#938eff",
            hoverRadius: 1,
          },
          {
            label: 'Riboflavin',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.riboflavin)
              },
            ],
            backgroundColor:"#1f28ff",
            hoverBackgroundColor: "#1f28ff",
            hoverRadius: 1,
          },
          {
            label: 'Niacin',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.niacin)
              },
            ],
            backgroundColor:"#62ff68",
            hoverBackgroundColor: "#62ff68",
            hoverRadius: 1,
          },
          {
            label: 'Vitamin B-6',
            data: [
              {
                x: $scope.randomPoint(),
                y: $scope.randomPoint(),
                r: $scope.percentage($scope.vitaminB6)
              },
            ],
            backgroundColor:"#39d083",
            hoverBackgroundColor: "#39d083",
            hoverRadius: 1,
          }
        ]
      };

      $scope.showNut = true
      console.log($scope.riboflavin)
    })
  }
  $scope.pullFoodNutrition()



  $scope.chartOptions = {
    color: "#e7f4e4",
    tooltips: {
      mode: 'dataset',
    },
    scales:{
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

  $scope.onChartClick = function(event) {
    console.log('BubbleController', 'onChartClick', event);
  }




})
