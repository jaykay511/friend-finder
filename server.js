var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

// Handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});