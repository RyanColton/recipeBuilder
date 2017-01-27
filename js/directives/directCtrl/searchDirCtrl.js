angular.module('recipeApp').controller('searchDirCtrl', function($scope, $state, mainService, uiGridConstants){

  $scope.food = true
  $scope.searchResults = [
    {group:"Group Name",
    name:"Item Name",
    ndbno:"12345"},
  ]
  $scope.grabFoodId = function(row){
    mainService.foodId = row.entity.ndbno;
    $scope.foodId = mainService.foodId
    $state.go('foodSearchResults')
    console.log($scope.foodId);
  }
  $scope.gridOptions = {
    enableSorting: true,
    columnDefs: [{field: 'name', displayName: 'Name'},
    {field: 'group', displayName: 'Group'},
    {field: 'ndbno', displayName: 'NDBNO'},
    {field: 'function', cellTemplate: '<button ng-click="grid.appScope.grabFoodId(row)">See nutrition</button>'}
    ],
    data: 'searchResults',
    excessRows: '4'
  }
  $scope.getSearchResults = function(){
    mainService.searchFoodList($scope.searchTerm).then(function(response){
      $scope.searchResults = response.data.list.item;

      $scope.food = true;
    })
  }

})
