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
		readFile('keys.json', function(errorOrData) {
		callback(JSON.parse(errorOrData));
	});
}

function getInfo(location) {
}
