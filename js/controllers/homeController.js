angular.module('recipeApp').controller('homeController', function($scope, mainService){



})

angular.module('recipeApp').animation('.fade-in', function(){
  return{
    enter: function(element, done){
      TweenMax.fromTo(element, 1, {opacity:0}, {opacity:1, onComplete:done} )
    }
  }
})
