
const path = require("path");

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


// Routing
app.use(express.static(path.join(__dirname, "../../PUBLIC")));
