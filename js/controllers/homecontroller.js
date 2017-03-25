angular.module("RouteControllerHome", [])
	.controller("HomeController", function($scope, GetData) {
		GetData.cards().then(function(results) {
			var cardList = results.data;
			var numberOfCards = cardList.length;
			var randomIndex1 = Math.floor(numberOfCards*Math.random());
			$scope.randomCard1 = cardList[randomIndex1];
			var randomIndex2 = Math.floor(numberOfCards*Math.random());
			$scope.randomCard2 = cardList[randomIndex2];
			var randomIndex3 = Math.floor(numberOfCards*Math.random());
			$scope.randomCard3 = cardList[randomIndex3];
			var randomIndex4 = Math.floor(numberOfCards*Math.random());
			$scope.randomCard4 = cardList[randomIndex4];
		});
	});