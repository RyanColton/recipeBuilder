angular.module('recipeApp')
.service('mainService', function($http, $q){
  this.searchFoodList = function(searchTerm){
    return $http({
      method: 'GET',
      url: 'http://api.nal.usda.gov/ndb/search/?format=json&q='+searchTerm+'&sort=r&max=30&api_key=gSF86FdjQ4LaECs7MXJ9m9aHjs5q8E4I4oKiw3uh&nutrients=205&nutrients=204&nutrients=208&nutrients=269'
    })
  }

  this.foodId = 0;

  this.nutritionData = function(){
    return $http({
      method: 'GET',
      url: 'http://api.nal.usda.gov/ndb/reports/?ndbno='+this.foodId+'&type=b&format=json&api_key=gSF86FdjQ4LaECs7MXJ9m9aHjs5q8E4I4oKiw3uh'
    })
  }
})
