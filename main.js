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
    var data = {"message":{"header":{"status_code":200,"execute_time":0.11870217323303},"body":{"track_list":[{"track":{"track_id":18873169,"track_mbid":"126241da-d2cb-42c2-a40e-f30909057647","track_name":"When I Was Your Man","track_rating":100,"track_length":213,"commontrack_id":11530225,"instrumental":0,"has_lyrics":1,"has_subtitles":1,"lyrics_id":7851715,"subtitle_id":390301,"album_id":14270007,"album_name":"Unorthodox Jukebox","artist_id":477739,"artist_mbid":"afb680f2-b6eb-4cd7-a70b-a63b25c763d5","artist_name":"Bruno Mars","album_coverart_100x100":"http:\/\/static.musixmatch.com\/images\/albums\/6\/6\/9\/2\/6\/2\/14262966.jpg","album_coverart_350x350":"http:\/\/static.musixmatch.com\/images\/albums\/6\/6\/9\/2\/6\/2\/14262966_350_350.jpg","album_coverart_500x500":"http:\/\/static.musixmatch.com\/images\/albums\/6\/6\/9\/2\/6\/2\/14262966_500_500.jpg","album_coverart_800x800":"","updated_time":"2013-04-06T12:06:00Z"}},{"track":{"track_id":19454156,"track_mbid":"47a25097-53e6-4039-b587-272163181932","track_name":"Just Give Me a Reason","track_rating":100,"track_length":243,"commontrack_id":11903909,"instrumental":0,"has_lyrics":1,"has_subtitles":1,"lyrics_id":7998046,"subtitle_id":383489,"album_id":14308180,"album_name":"The Truth About Love","artist_id":14309112,"artist_mbid":"f4d5cc07-3bc9-4836-9b15-88a08359bc63","artist_name":"P!nk","album_coverart_100x100":"http:\/\/static.musixmatch.com\/images\/albums\/8\/2\/7\/8\/3\/2\/14238728.jpg","album_coverart_350x350":"","album_coverart_500x500":"","album_coverart_800x800":"","updated_time":"2013-04-06T12:06:12Z"}},{"track":{"track_id":18538662,"track_mbid":"3452f1e9-220f-459a-ade4-ad4a15639760","track_name":"Cruise","track_rating":100,"track_length":209,"commontrack_id":11440147,"instrumental":0,"has_lyrics":1,"has_subtitles":1,"lyrics_id":7777289,"subtitle_id":348723,"album_id":14261827,"album_name":"It'z Just What We Do","artist_id":14014541,"artist_mbid":"c16817df-0160-490d-a437-c128cbca9218","artist_name":"Florida Georgia Line","album_coverart_100x100":"http:\/\/static.musixmatch.com\/images\/albums\/5\/1\/0\/6\/5\/2\/14256015.jpg","album_coverart_350x350":"http:\/\/static.musixmatch.com\/images\/albums\/5\/1\/0\/6\/5\/2\/14256015_350_350.jpg","album_coverart_500x500":"http:\/\/static.musixmatch.com\/images\/albums\/5\/1\/0\/6\/5\/2\/14256015_500_500.jpg","album_coverart_800x800":"","updated_time":"2013-04-05T12:05:52Z"}},{"track":{"track_id":19639199,"track_mbid":"5a85d79a-802f-41f2-84e8-517be39e0b2b","track_name":"Can't Hold Us","track_rating":84,"track_length":258,"commontrack_id":12001843,"instrumental":0,"has_lyrics":1,"has_subtitles":1,"lyrics_id":8054404,"subtitle_id":387276,"album_id":14297891,"album_name":"The Heist","artist_id":13869016,"artist_mbid":"","artist_name":"Macklemore & Ryan Lewis","album_coverart_100x100":"http:\/\/static.musixmatch.com\/images\/albums\/2\/1\/3\/2\/5\/2\/14252312.jpg","album_coverart_350x350":"http:\/\/static.musixmatch.com\/images\/albums\/2\/1\/3\/2\/5\/2\/14252312_350_350.jpg","album_coverart_500x500":"http:\/\/static.musixmatch.com\/images\/albums\/2\/1\/3\/2\/5\/2\/14252312_500_500.jpg","album_coverart_800x800":"","updated_time":"2013-04-06T12:06:13Z"}},{"track":{"track_id":18988832,"track_mbid":"4c325ec1-e2df-4002-811b-60e74752b152","track_name":"Stay feat. Mikky Ekko","track_rating":100,"track_length":241,"commontrack_id":11666471,"instrumental":0,"has_lyrics":1,"has_subtitles":1,"lyrics_id":7905286,"subtitle_id":374517,"album_id":14284560,"album_name":"Unapologetic","artist_id":150259,"artist_mbid":"73e5e69d-3554-40d8-8516-00cb38737a1c","artist_name":"Rihanna","album_coverart_100x100":"http:\/\/static.musixmatch.com\/images\/albums\/0\/3\/0\/5\/7\/2\/14275030.jpg","album_coverart_350x350":"http:\/\/static.musixmatch.com\/images\/albums\/0\/3\/0\/5\/7\/2\/14275030_350_350.jpg","album_coverart_500x500":"http:\/\/static.musixmatch.com\/images\/albums\/0\/3\/0\/5\/7\/2\/14275030_500_500.jpg","album_coverart_800x800":"","updated_time":"2013-04-06T12:06:04Z"}}]}}};
    $scope.Top5Tracks = data.message.body.track_list;

	console.log( $scope.Top5Tracks);
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