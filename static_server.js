
const path = require("path");

// Setup basic express server
const express = require("express");
const app = express();
const server = require("http").createServer(app);

// Load Configuration
const appConfig = require("./__appConfig");

console.log(appConfig);

server.listen(appConfig.port, () => {
  console.log("Server listening at appConfig.port %d", appConfig.port);
});

// Routing
app.use(express.static(path.join(__dirname, "dist")));
