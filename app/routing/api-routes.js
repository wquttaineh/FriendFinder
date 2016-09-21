// Search for Specific Character (or all frineds) - provides JSON
app.get('/api/:friends?', function (req, res) {
	var chosen = req.params.friends;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < friends.length; i++) {
			if (chosen === friends[i].routeName) {
				res.json(friends[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(friends);
	}
});

// Create New Characters - takes in JSON input
app.post('/api/friends', function (req, res) {
	var newcharacter = req.body;
	newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase();

	console.log(newcharacter);

	characters.push(newcharacter);

	res.json(newcharacter);
});