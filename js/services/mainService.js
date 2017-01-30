angular.module('recipeApp')
.service('mainService', function($http, $q){
  this.searchFoodList = function(searchTerm){
    return $http({
      method: 'GET',
      url: 'http://api.nal.usda.gov/ndb/search/?format=json&q='+searchTerm+'&sort=r&max=30&ds=Standard Reference&api_key=gSF86FdjQ4LaECs7MXJ9m9aHjs5q8E4I4oKiw3uh&nutrients=205&nutrients=204&nutrients=208&nutrients=269'
    })
  }

  this.foodId = 0;

  this.nutritionData = function(){
    return $http({
      method: 'GET',
      url: 'http://api.nal.usda.gov/ndb/reports/?ndbno='+this.foodId+'&type=b&format=json&api_key=gSF86FdjQ4LaECs7MXJ9m9aHjs5q8E4I4oKiw3uh'
    })
  }

  this.dailyRecomendedValue = [
    {
      nutrient: 'calcium',
      nutrientId: 301,
      value: 1000,
    },
    {
      nutrient: 'iron',
      nutrientId: 303,
      value: 18,
    },
    {
      nutrient: 'vitamin C',
      nutrientId: 401,
      value: 60,
    },
    {
      nutrient: 'sodium',
      nutrientId: 307,
      value: 2400,
    },
    {
      nutrient: 'magnesium',
      nutrientId: 304,
      value: 400,
    },
    {
      nutrient: 'phosphorus',
      nutrientId: 305,
      value: 1000,
    },
    {
      nutrient: 'potassium',
      nutrientId: 306,
      value: 3500,
    },
    {
      nutrient: 'zinc',
      nutrientId: 309,
      value: 15,
    },
    {
      nutrient: 'thiamin',
      nutrientId: 404,
      value: 1.5,
    },
    {
      nutrient: 'riboflavin',
      nutrientId: 405,
      value: 1.5,
    },
    {
      nutrient: 'niacin',
      nutrientId: 406,
      value: 20,
    },
    {
      nutrient: 'vitamin B-6',
      nutrientId: 415,
      value: 2,
    },
  ]
})
