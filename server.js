// Load necessary node package
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Initiate express app
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

var user = {
  name: "",
  photo: "",
  scores:[],
 };

var userGuy = {
  name: "Tony",
  photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[
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
 };

 var friends = []

// Landing page route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Tables page route
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

//api/ page route
app.post("/api/friends", function(req, res) {

	//this is the function to loop through the questions
 	var newFriendQs = req.body.userqs
 	var closestMatch = null;
 	//var closestMatchDifference = 0;

 	for(i = 0; i < friends.length; i++){

 		//the first user will get skipped over since they have no existing friend to compare to
		var existingFriend = friends[i]
		var totalDifference = 0;
		var closestMatchDifference = 40;

		//this loops through the actual questions
		for(i = 0; i < newFriendQs.length; i++){

			if (existingFriend === newFriendQs) {
			continue;
			}

			//this allows establishes two different values
			val1 = parseInt(existingFriend.userqs[i])		
			val2 = parseInt(newFriendQs[i])

			//this compares the difference between the actual numbers and adds them up
			totalDifference += Math.abs(val1 - val2)

			Array.prototype.min = function() {
  			console.log(Math.min.apply(null, this))

  			 

			if (totalDifference.min < closestMatchDifference) {
				closestMatch = closestMatchDifference;
				console.log(closestMatch);
				//set closest match to current friend we are looking at

	  		}
		};
		}
	}	
 	friends.push(req.body);
 	console.log(friends);
 	console.log(totalDifference);

   });


app.listen(PORT, function() {
  console.log("App listening on PORT" + PORT);
});
