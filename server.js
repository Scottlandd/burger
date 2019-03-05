var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets handlebars has the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ========================================================

// Routes
require("./controllers/burgers_controller.js")(app);

// Start server to listen for client requests
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});