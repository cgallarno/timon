"use strict";

function HomeController($scope,$http,$route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;   

    $scope.items = ['settings', 'home', 'other'];
    $scope.selection = $scope.items[0];

  $scope.forms = {
                    title : "Contact Form",
                    formElement0 : {
                        wrapperClass : "span6",
                        label : {
                            value : "Name",
                            for : "firstname"
                        },
                        element : "input",
                        attr: {
                            type : "text",
                            class : "blue-text",
                            name : "firstname",
                            id : "firstname",
                            placeholder: "First Name",
                            value : "{{user.Firstname}}" //not sure how this would be implemented
                        }
                    },
                    formElement1 : {
                        wrapperClass : "span6",
                        element : "input",
                        attr: {
                            type : "text",
                            class : "blue-text",
                            name : "lastname",
                            id : "lastname",
                            placeholder: "Last Name",
                            value : "{{user.Lastname}}" //not sure how this would be implemented
                        }
                    },
                    formElement2 : {
                        wrapperClass : "span12",
                        label : {
                            value : "Occupation",
                            for : "job"
                        },
                        element : "select",
                        attr: {
                            type : "text",
                            class : "blue-text",
                            name : "job",
                            id : "occupation"
                        },
                        options : {
                            option0 : {
                                value : 'webdev',
                                text : 'Web Developer'
                            },
                            option1 : {
                                value : 'education',
                                text : 'Teacher',
                                selected: true
                            },
                            option2 : {
                                value : 'other',
                                text : 'Other'
                            }
                        }
                    },
                    formElement3 : {
                        label : {
                            value : "Email Address",
                            for : "email"
                        },
                        element : "input",
                        attr : {
                            type : "email",
                            class : "email",
                            id : "email",
                            name : "email",
                            placeholder : "email",
                            value : "{{user.email}}"   
                        }
                    },
                    formElement4 : {
                        element : "textarea",
                        attr : {
                            value : "Email Body"
                        }
                    }
                };
    $scope.field = $scope.forms;
    console.log($scope.field);
}

function CreateController($scope,$http,$route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    plus.getTags($scope, $http);
    $scope.listData = $scope.tags;  
}

function GeoItemListController($scope,$http,$route, $routeParams, $location, db) {

    do{
        plus.getGeoBucket($scope, $http);
        $scope.listData = $scope.geobucket;
    }
   while(typeof $scope.listData == 'undefined');
    $.each($scope.listData, function(){
        this.SmallKey = this.Key.substr(0,7);
        this.search = "yesterday";
    }); 
}
function GeoItemDetailsController($scope,$http,$route, $routeParams, $location) {
    plus.getGeoItem($scope, $http, $routeParams.Key);   
    $scope.item = $scope.geoitem;

    $scope.item.SmallKey = $scope.item.Key.substr(0, 7);

    var loc = $location.$$url.split('/');

    console.log(loc);

    if(loc[1] === 'update'){
        plus.getTags($scope, $http);
        $scope.listData = $scope.tags;
    }

    var d = new Date(($scope.item.Time * 1000)),
        date = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear(),
        hours = (d.getHours() > 12)?d.getHours() - 12:d.getHours(),
        minutes = d.getMinutes(),
        minutesString = ((minutes.toString().length == 1)?'0':'') + minutes + ((hours >= 12)?' pm':' am');

    $scope.item.Time = date + ' ' + hours + ':' + minutesString;

    marker = new L.marker([$scope.item.Latitude,$scope.item.Longitude], {icon: defaultIcon});
    map.addLayer(marker);
    map.setView([$scope.item.Latitude, $scope.item.Longitude], 16);
  
}
function GeoMapController($scope,$http,$route, $routeParams, $location) {
    plus.getGeoBucket($scope, $http)
            $scope.listData = $scope.geobucket;

    var latLng;

    $.each($scope.listData, function(){
        latLng = [this.Latitude,this.Longitude];
        var marker = L.marker(latLng, {icon: defaultIcon}).addTo(map);
            marker.bindPopup(this.Meta + ' <a href="#/read/' + this.Key + '">View</a>');
    });

    if(typeof $routeParams.lat !== 'undefined' && typeof $routeParams.lng !== 'undefined'){
        map.setView([$routeParams.lat, $routeParams.lng], 10);
    }else{

        map.setView(latLng, 10);
    }        
}