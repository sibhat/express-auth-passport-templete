let express = require("express");
let server = express.Router();

const queries = require("../data/queries");

server.use("/users", queries.getAllUsers);
module.exports = server;
