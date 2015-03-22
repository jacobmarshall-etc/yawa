var http = require('http');
var fs = require('fs');
var path = require('path');

function readFile(fileName, callback) {
var filePath = path.join(__dirname, fileName);

fs.readFile(filePath, {encoding: 'utf-8'}, function (error, data) {
		return callback(error || data);
	});
}

function getJSON(callback) {
		readFile('../keys.json', function(errorOrData) {
		callback(JSON.parse(errorOrData));
	});
}

function getAPIKey(service, callback) {
	getJSON(function(key) {
		// service can either be google or forecast
		callback(key[service]);
	});
}


// this isn't working
getAPIKey('google', function(key) {
	console.log(key);
});

function getInfo(location) {
	var formattedLocation = location.split(/[ ,]+/).join('+')
	var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + formattedLocation + '&key=' + apiKey
}
