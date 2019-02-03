var PeopleAppModule = angular.module("peopleApp", []);    
PeopleAppModule.controller("peopleCtrl", function ($scope,$http) {
  
 $scope.peoples = [];
 $scope.peopleNames=$scope.peoples.name;
 //$http service to get the peoples data
  $http({
    method: 'GET', 
    url: 'people.json'
     }).then(function (res) {
       $scope.peoples = res.data.People;
     },function (error){
        if(error){
          $scope.Error = error.data;
         
        }
      });

    $scope.getDetails = function($index) {
      $scope.StrLike = "Likes";
      $scope.StrdisLike = "DisLikes"; 
      $scope.Rating = $scope.peoples[$index].rating;
      $scope.MaxStar = 5;
      $scope.ratingArray = function(star) {
        var startArray = [];
        for (let i = 0; i < star; i++) {
          startArray.push(i);
        }
        return startArray;
      };
      
      $scope.peopledetail = $scope.peoples[$index];
      $scope.dislikes = $scope.peoples[$index].Dislikes;
      $scope.likes = $scope.peoples[$index].Likes;
    }
  }) ; 

 PeopleAppModule.directive('aside', function() {
    return {

      templateUrl: "asideComponent.html",
      restrict: "E"
    };
  });
  
 PeopleAppModule.directive('header', function() {
    return {

      templateUrl: "headerComponent.html",
      restrict: "E"
    };
  });
  
 PeopleAppModule.directive('main', function() {
    return {

      templateUrl: "mainComponent.html",
      restrict: "E"
    };
  });
  
    
    
       
   
