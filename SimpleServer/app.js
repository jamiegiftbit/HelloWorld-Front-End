var express = require("express");
var fs = require("fs");

var app = express();

var routes = require("./routes/routes.js")(app, fs);

// inform user that server is running successfully
var server = app.listen(3000, function () {
  console.log("Listening on port %s...", server.address().port);
});
