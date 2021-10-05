
const path = require("path");
let fs = require("fs")

// Setup basic express server
var compression = require('compression')
const express = require("express");
const app = express();
const server = require("http").createServer(app);

// Load Configuration
const appConfig = require("../../__appConfig");
console.log(appConfig);

server.listen(appConfig.port, () => {
  console.log("Server listening at appConfig.port %d", appConfig.port);
});

// compress all responses
app.use(compression())

// Routing to the PUBLIC folder...getting static content available to web
app.use(express.static(path.join(__dirname, "../../PUBLIC")));


// Get page by slug
app.get('/Vadmin', function (req, res) {
  var page = fs.readFileSync(path.join(__dirname, "../../PUBLIC/index.html"));
  var pageInfo = '<script>' + JSON.stringify({ appConfig: appConfig, page_slug: req.params.page_slug, response_timestamp: Date.now() }, true, 2) + '</script>';
  res.send(pageInfo + "ADMIN PAGE" + page);
});


//-> PUBLIC 

// Get page by slug
app.get('/:page_slug', function (req, res) {
  var page = fs.readFileSync(path.join(__dirname, "../../PUBLIC/index.html"));
  var pageInfo = '<script>' + JSON.stringify({ appConfig: appConfig, page_slug: req.params.page_slug, response_timestamp: Date.now() }, true, 2) + '</script>';
  res.send(pageInfo + page);
});

