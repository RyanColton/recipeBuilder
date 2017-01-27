angular.module('recipeApp', ['ui.router', 'chart.js', 'ui.grid'])
.config(function($stateProvider, $urlRouterProvider, ChartJsProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    url:'/',
    templateUrl: './views/home.html',
    controller: 'homeController'
  })
  .state('recipeNamer',{
    url:'/nameRecipe',
    templateUrl:'./views/recipeNamer.html',
    controller:'recipeNameController'
  })
  .state('recipeBuilder',{
    url:'/recipeBuilder',
    templateUrl: './views/recipeBuilder.html',
    controller: 'recipeBuilderController'
  })
  .state('recipeResults',{
    url:'/recipeResults',
    templateUrl:'./views/recipeResults.html',
    controller:'recipeResultsController'
  })
  .state('foodSearch',{
    url:'/search',
    templateUrl:'./views/foodSearch.html',
    controllers:'foodSearchController'
  })
  .state('foodSearchResults',{
    url:'/searchResults',
    templateUrl:'./views/foodSearchResults.html',
    controllers:'foodSearchResultsController'
  })


})
