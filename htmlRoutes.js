//Your htmlRoutes.js file should include two routes:
//A GET Route to /survey which should display the survey page.
//A default USE route that leads to home.html which displays the home page.


// Create the Routes
// Landing page route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Tables page route
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

