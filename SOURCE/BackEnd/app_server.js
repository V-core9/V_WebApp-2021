const open = require('open');
const path = require("path");
let fs = require("fs")
const vFileExplorer = require(path.join(__dirname, "./v_modules/fileExplorer/fs_explorer"))


// Setup basic express server
var compression = require('compression')
const express = require("express");
const app = express();
const server = require("http").createServer(app);

// Load Configuration
const appConfig = require("../../__appConfig");
console.log(appConfig);
var helperURL = ((appConfig.onlySecure === true) ? "https://" : "http://") + appConfig.origin +":"+ appConfig.port +"/";
server.listen(appConfig.port, () => {
  loadPages();
  console.log(`Server listening at  ${helperURL}`);
  // Opens the URL in the default browser.
  open(helperURL);
});

// compress all responses
app.use(compression())

// Routing to the PUBLIC folder...getting static content available to web
app.use(express.static(path.join(__dirname, "../../PUBLIC")));


// Get page by slug
app.get('/Vadmin', function (req, res) {
  loadPages();
  res.send( '<script>const  appConfigPageInfo = ' + JSON.stringify({ appConfig: appConfig, page_slug: req.params.page_slug, response_timestamp: Date.now() , files: listOfFiles }, true, 2) + ' ;</script>' + adminPage );
});

//-> PUBLIC 

// Get page by slug
app.get('/:page_slug', function (req, res) {
  res.send( '<script>const  appConfigPageInfo = ' + JSON.stringify({ appConfig: appConfig, page_slug: req.params.page_slug, response_timestamp: Date.now() }, true, 2) + ' ;</script>' + homePage );
});

var homePage = null;
var adminPage = null;
var listOfFiles = null;


loadPages=()=>{
   homePage = fs.readFileSync(path.join(__dirname, "../../PUBLIC/index.html"));
   adminPage = fs.readFileSync(path.join(__dirname, "../../PUBLIC/admin.html"));
   listOfFiles = vFileExplorer.listDir(path.join(__dirname, "../../"));
}
