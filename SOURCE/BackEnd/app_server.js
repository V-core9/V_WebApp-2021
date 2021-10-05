
const path = require("path");
let fs = require("fs")
const vFileExplorer = require(path.join(__dirname, "./v_modules/fileExplorer/fs_explorer"))

var homePage = fs.readFileSync(path.join(__dirname, "../../PUBLIC/index.html"));
var adminPage = fs.readFileSync(path.join(__dirname, "../../PUBLIC/admin.html"));
var listOfFiles = vFileExplorer.listDir(path.join(__dirname, "../../"));

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
  res.send( '<script>const  appConfigPageInfo = ' + JSON.stringify({ appConfig: appConfig, page_slug: req.params.page_slug, response_timestamp: Date.now() , files: listOfFiles }, true, 2) + ' ;</script>' + adminPage );
});

//-> PUBLIC 

// Get page by slug
app.get('/:page_slug', function (req, res) {
  res.send( '<script>const  appConfigPageInfo = ' + JSON.stringify({ appConfig: appConfig, page_slug: req.params.page_slug, response_timestamp: Date.now() }, true, 2) + ' ;</script>' + homePage );
});

