var https = require('https');
var keys  = require('../keys.json');

function getInfo(location, callback) {
	var formattedLocation = location.split(/[ ,]+/).join('+');
	var url = 'https://maps.googleapis.com/maps/api/geocode/json?addresponses=' + formattedLocation + '&key=' + keys.google;

	// Make an HTTP requestuest to the Google Maps API
	var request = https.request(url, function (response) {
		var body = '';

		// When a new chunk of data is send back, append to `body`
		response.on('data', function (chunk) {
			body += chunk;
		});

		// When the response has finished coming back, parse and pass through
		// the data to the callback (function).
		response.on('end', function () {
			callback(JSON.parse(body));
		});
	});

	request.end();
}

getInfo("12345 41st Ave, Vancouver, BC, Canada", function (info) {
	console.log(info);
});
