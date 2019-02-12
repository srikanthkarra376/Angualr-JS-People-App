var PeopleAppModule = angular.module("peopleApp", []);    
PeopleAppModule.controller("peopleCtrl", function ($scope,$http,$timeout) {
  
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

    $scope.getDetails = function(id) {

      $scope.StrLike = "Likes";
      $scope.StrdisLike = "DisLikes"; 
      $scope.Rating = $scope.peoples[id].rating;
      $scope.MaxStar = 5; 
      $scope.peopledetail = $scope.peoples[id];
      $scope.dislikes = $scope.peoples[id].Dislikes;
      $scope.likes = $scope.peoples[id].Likes;
      $scope.ratingArray = function(star) {
        var startArray = [];
        for (let i = 0; i < star; i++) {
          startArray.push(i);
        }
        return startArray;
      };
    
    }
    $scope.showorhide=false;
 
    $scope.messageForm = () => {
    
    prompt("Enter your message");
    $scope.messageReply = "congratulations ! your message sent...";
    $scope.showorhide=true;
   $timeout( clearmessage = () => {
   
      $scope.messageReply = "";
    },3000);
   
    
    
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
  
    
    
       
   
