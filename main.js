"use strict";

function homeController($scope,$http,$route, $routeParams, $location){
	$scope.GetTopFive = function() {
    	var top5, data;
		$.ajax({
			  dataType: "json",
			  url: theme_directory + '/json/top5.json',
			  async:false,
			  success: function(data){ //console.log('data success', data); 
			}
		});

		return data.message.body.track_list;
    };
    
}

function searchController($scope,$http,$route, $routeParams, $location){
    
}


// function HomeController($scope,$http,$route, $routeParams, $location) {
//     $scope.$route = $route;
//     $scope.$location = $location;
//     $scope.$routeParams = $routeParams;   

//     $scope.items = ['settings', 'home', 'other'];
//     $scope.selection = $scope.items[0];

//     $scope.field = $scope.forms;
//     console.log($scope.field);
// }

// function CreateController($scope,$http,$route, $routeParams, $location) {
//     $scope.$route = $route;
//     $scope.$location = $location;
//     $scope.$routeParams = $routeParams;
//     plus.getTags($scope, $http);
//     $scope.listData = $scope.tags;  
// }

// function GeoItemListController($scope,$http,$route, $routeParams, $location, db) {

//     do{
//         plus.getGeoBucket($scope, $http);
//         $scope.listData = $scope.geobucket;
//     }
//    while(typeof $scope.listData == 'undefined');
//     $.each($scope.listData, function(){
//         this.SmallKey = this.Key.substr(0,7);
//         this.search = "yesterday";
//     }); 
// }
// function GeoItemDetailsController($scope,$http,$route, $routeParams, $location) {
//     plus.getGeoItem($scope, $http, $routeParams.Key);   
//     $scope.item = $scope.geoitem;

//     $scope.item.SmallKey = $scope.item.Key.substr(0, 7);

//     var loc = $location.$$url.split('/');

//     console.log(loc);

//     if(loc[1] === 'update'){
//         plus.getTags($scope, $http);
//         $scope.listData = $scope.tags;
//     }

//     var d = new Date(($scope.item.Time * 1000)),
//         date = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear(),
//         hours = (d.getHours() > 12)?d.getHours() - 12:d.getHours(),
//         minutes = d.getMinutes(),
//         minutesString = ((minutes.toString().length == 1)?'0':'') + minutes + ((hours >= 12)?' pm':' am');

//     $scope.item.Time = date + ' ' + hours + ':' + minutesString;

//     marker = new L.marker([$scope.item.Latitude,$scope.item.Longitude], {icon: defaultIcon});
//     map.addLayer(marker);
//     map.setView([$scope.item.Latitude, $scope.item.Longitude], 16);
  
// }
// function GeoMapController($scope,$http,$route, $routeParams, $location) {
//     plus.getGeoBucket($scope, $http)
//             $scope.listData = $scope.geobucket;

//     var latLng;

//     $.each($scope.listData, function(){
//         latLng = [this.Latitude,this.Longitude];
//         var marker = L.marker(latLng, {icon: defaultIcon}).addTo(map);
//             marker.bindPopup(this.Meta + ' <a href="#/read/' + this.Key + '">View</a>');
//     });

//     if(typeof $routeParams.lat !== 'undefined' && typeof $routeParams.lng !== 'undefined'){
//         map.setView([$routeParams.lat, $routeParams.lng], 10);
//     }else{

//         map.setView(latLng, 10);
//     }        
// }