var globalUtils = {};

globalUtils.requestJson = function(uri, callback){
	$.getJSON(uri, callback);
};

globalUtils.getUserLocation = function(callback){
	navigator.geolocation.getCurrentPosition(callback);
};