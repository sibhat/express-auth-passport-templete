let express = require("express");
let server = express.Router();

const queries = require("../data/queries");

server.use("/users", queries.getAllUsers);
server.get("/", (req,res)=>{
    res.json({name: "name"})
});


module.exports = server;
