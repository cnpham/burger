// require express
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set the handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import the routes
var routes = require("./controllers/burgersController.js");

app.use(routes);

// initiate server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
