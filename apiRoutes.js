// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends./his will be used to display a JSON of all possible friends.

// A POST routes /api/friends. 
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

// Create the Routes
// Landing page route
app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "???.html"));
});

//tried to use an example of a post request 
app.post("/api/friends", function(req, res) {
 //   friends.push(friends);
 //   res.json("hello world.");
 	console.log("working");
   

});


//var orm = require("./config/orm.js");//