/* Simply for Development use, you must update these values before heading to production */
var app_id = "5151d44d818b24f933000000";// campouts
//var app_id = "5151d334818b24f733000000";//nodata
var secret_key = "6c2f286c08b0e890bc9562014e2fd5f5";//campouts
//var secret_key = "9c0d2184609e33dc23463418a88cea95";//nodata
var plus = {};

plus.getTags = function($scope, $http){
	var crypt = Aes.Ctr.encrypt("hello", secret_key, 256);
	/*
	$http.get('http://api.plus.io/'+app_id+'/GetTags?sig='+crypt+'&callback=').success(function(data) {
	  $scope.tags = data;
	 // console.log(data)
	});*/
	
	$.ajax({
	   type: "GET",
	   url: 'http://api.plus.io/' + app_id + '/GetTags?sig='+crypt+'&callback=',
	   async: false,
	   dataType: 'json',
	   //data: "name=John&location=Boston",
	   success: function(data){
	   	$scope.tags = data;
	   }
	 });
}

plus.getGeoBucket = function($scope, $http){
	var crypt = Aes.Ctr.encrypt("hello", secret_key, 256);
	

	$scope.geobucket = [];
	$http.get('http://api.plus.io/'+app_id+'/GetGeoBucket?sig='+crypt+'&callback=').success(function(data) {
	  //$scope.geobucket = data;
	  	angular.copy(data, $scope.geobucket);
		console.log($scope.geobucket);
	});

	$.ajax({
	   type: "GET",
	   url: 'http://api.plus.io/' + app_id + '/GetGeoBucket?sig='+crypt+'&callback=',
	   async: false,
	   dataType: 'json',
	   //data: "name=John&location=Boston",
	   success: function(data){
	   	$scope.geobucket = data;
	   }
	 });
}

plus.getBucket = function($scope, $http, bucket){
	var crypt = Aes.Ctr.encrypt("hello", secret_key, 256);
	var content = Aes.Ctr.encrypt(bucket, secret_key, 256);
	$http.get('http://api.plus.io/'+app_id+'/GetBucket/'+content+'?sig='+crypt+'&callback=').success(function(data) {
	  $scope.bucket = data;
	});
}

plus.getGeoItem = function($scope, $http,item){
	var crypt = Aes.Ctr.encrypt("hello", secret_key, 256);
/*	
	$http.get('http://api.plus.io/'+app_id+'/GetGeoItem/'+item+'?sig='+crypt+'&callback=').success(function(data) {
	  $scope.geoitem = data;
	});
*/
	$.ajax({
	   type: "GET",
	   dataType: 'json',
	   async:false,
	   url: 'http://api.plus.io/'+app_id+'/GetGeoItem/'+item+'?sig='+crypt+'&callback=',
	   success: function(data){
	   	  $scope.geoitem = data;
	   	//console.log('ajax calling');
	   	//console.log(data);
	   }
	 });

}

plus.getBucketItem = function($scope, $http,bucket, item){
	var crypt = Aes.Ctr.encrypt("hello", secret_key, 256);
	$http.get('http://api.plus.io/'+app_id+'/GetBucketItem/'+bucket+'/'+item+'?sig='+crypt+'&callback=').success(function(data) {
	  $scope.bucketitem = data;
	});
}

plus.addGeoItem = function (tag,latitude,longitude,meta){
	$.post('http://api.plus.io/addGeoItem', {"id":app_id,"key":secret_key,"tag":tag,"long":longitude,"lat":latitude,"metadata":meta}, function(data) {});
}

plus.addItem = function (bucket,content){
	$.post('http://api.plus.io/addItem', {"id":app_id,"key":secret_key,"bucket":bucket,"content":content}, function(data) {});
}


plus.about = function(){
	console.log("Plus Framework");
	console.log("Version: 1.0");
	console.log("http://www.plus.io");
}