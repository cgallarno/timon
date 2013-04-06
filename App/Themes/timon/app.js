"use strict";

var app = angular.module('myApp',[], function($routeProvider, $locationProvider){
	$routeProvider.when('/', { templateUrl: theme_tpl_directory + 'home.tpl.html', controller: homeController });
	// $routeProvider.when('/read', { templateUrl: theme_tpl_directory + 'read.tpl.html', controller: GeoItemListController });
	// $routeProvider.when('/create', { templateUrl: theme_tpl_directory + 'create.tpl.html', controller: CreateController });
	// $routeProvider.when('/update', { templateUrl: theme_tpl_directory + 'update.tpl.html', controller: GeoItemListController });
	// $routeProvider.when('/delete', { templateUrl: theme_tpl_directory + 'delete.tpl.html', controller: GeoItemListController });
	//$routeProvider.when('/index.html', { templateUrl: theme_tpl_directory + 'home.tpl.html', controller: HomeController });
	// $routeProvider.when('/Tags/', { templateUrl: theme_tpl_directory + 'tags.tpl.html', controller: TagListController });
	// $routeProvider.when('/Tags/:Name', { templateUrl: theme_tpl_directory + 'tagDetails.tpl.html', controller: TagDetailsController });
	// $routeProvider.when('/GeoItems/', { templateUrl: theme_tpl_directory + 'geoItems.tpl.html', controller: GeoItemListController });
	// $routeProvider.when('/read/geo-items-map/:lat/:lng', { templateUrl: theme_tpl_directory + 'geo-items-map.tpl.html', controller: GeoMapController });	
	// $routeProvider.when('/read/geo-items-map/', { templateUrl: theme_tpl_directory + 'geo-items-map.tpl.html', controller: GeoMapController });	
	// $routeProvider.when('/read/:Key', { templateUrl: theme_tpl_directory + 'geo-item.tpl.html', controller: GeoItemDetailsController });	
	// $routeProvider.when('/update/:Key', { templateUrl: theme_tpl_directory + 'edit-geo-item.tpl.html', controller: GeoItemDetailsController });	
	// $routeProvider.when('/settings/', { templateUrl: theme_tpl_directory + 'settings.tpl.html', controller: SettingsController });
	// $routeProvider.when('/settingDetails/:id', { templateUrl: theme_tpl_directory + 'settingDetail.tpl.html', controller: SettingDetailsController });
	//$scope.params = $routeParams;
});

app.run(function($rootScope, $templateCache, $location) {
	// This should remove cached partial templates to prevent situations where 
	// controllers / views are updated but updates not reflecting in the browser despite removing all browser cache.
    $rootScope.$on('$viewContentLoaded', function() {
        $templateCache.removeAll();
    });

    // Shared Navigation elements
    $rootScope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };

    $rootScope.GetNavigation = function(){
        return theme_tpl_directory + 'navigation.tpl.html';
    }; 
    $rootScope.GetHeader = function(){
        return theme_tpl_directory + 'header.tpl.html';
    }; 
    $rootScope.GetFooter = function(){
        return theme_tpl_directory + 'footer.tpl.html';
    }; 
});

app.factory('db', function() {  
	var geobucket =[];
  	var plus = {};
	plus.getGeoBucket = function(){
		var crypt = Aes.Ctr.encrypt("hello", secret_key, 256);
		// $http.get('http://api.plus.io/'+app_id+'/GetGeoBucket?sig='+crypt+'&callback=').success(function(data) {
		//   $scope.geobucket = data;
		// //  console.log($scope.geobucket);
		// });

		$.ajax({
		   type: "GET",
		   url: 'http://api.plus.io/' + app_id + '/GetGeoBucket?sig='+crypt+'&callback=',
		   async: true,
		   dataType: 'json',
		   //data: "name=John&location=Boston",
		   success: function(data){
		   		geobucket = data;
		   		console.log('Data returned');
		   }
		 });
	}

  return plus; // returning this is very important
});