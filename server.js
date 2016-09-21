// Dependencies
var path 		= require('path');
var express 	= require('express');
var bodyParser  = require('body-parser');

// Sets up the Express App
var app = express();
var PORT = 9999,

// Basic route that sends the user first to the AJAX Page
app.get('/', function (request, response) {
	response.sendFile(path.join(__dirname, 'home.html'));
	// response.send('Hello World!');
});

app.get('/home', function (request, response) {
	response.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/survey', function (request, response) {
	response.sendFile(path.join(__dirname, 'survey.html'));
});

Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var friends = [{
  "name":"walid",
  "photo":"pic1.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ]
},{
	"name":"kevin",
	"photo":"",
	"scores":[
	5,
	1,
	4,
	4,
	5,
	1,
	2,
	5,
	4,
	1
	]
}];

// Search for Specific Character (or all frineds) - provides JSON
app.get('/api/:friends?', function (request, response) {
	var chosen = request.params.friends;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < friends.length; i++) {
			if (chosen === friends[i].name) {
				response.json(friends[i]);
				return;
			}
		}

		response.json(false);
	} else {
		response.json(friends);
	}
});

// Create New friends - takes in JSON input
app.post('/api/friends', function (request, response) {
	var newcharacter = request.body;
	newcharacter.name = newcharacter.name.replace(/\s+/g, '').toLowerCase();

	console.log(newcharacter);

	friends.push(newcharacter);

	response.json(newcharacter);
});

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
