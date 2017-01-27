angular.module('recipeApp').directive('searchResultDir', function(){
  return {
    restirct: 'E',
    templateUrl: './js/directives/direcTemps/searchResultDir.html',
    controller: 'foodSearchResultsController',
  }
})
