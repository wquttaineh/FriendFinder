// Search for Specific Character (or all frineds) - provides JSON
// app.get('/:friends?', function (request, response) {
// 	var chosen = request.params.friends;

// 	if (chosen) {
// 		console.log(chosen);

// 		for (var i = 0; i < friends.length; i++) {
// 			if (chosen === friends[i].routeName) {
// 				response.json(friends[i]);
// 				return;
// 			}
// 		}

// 		response.json(false);
// 	} else {
// 		response.json(friends);
// 	}
// });

// Create New friends - takes in JSON input
// app.post('/api/friends', function (req, res) {
// 	var newcharacter = req.body;
// 	newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase();

// 	console.log(newcharacter);

// 	friends.push(newcharacter);

// 	res.json(newcharacter);
// });

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData 		= require('../data/friends.js');
// var surveyData 	= require('../data/waitinglist-data.js');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/home', function (request, response) {
		response.json(friendsData);
	});

	// app.get('/api/survey', function (request, response) {
	// 	response.json(surveyData);
	// });

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/home', function (request, response) {
		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table
		// if (homeData.length < 5) {
			friendsData.push(request.body);
			// res.json(true); // KEY LINE
		// } else { // Or false if they don't have a table
			// surveyData.push(request.body);
			// res.json(false); // KEY LINE
		// }
	});

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don't worry about it!

	// app.post('/api/clear', function () {
	// 	// Empty out the arrays of data
	// 	homeData = [];
	// 	surveyData = [];

	// 	console.log(homeData);
	// });
};
