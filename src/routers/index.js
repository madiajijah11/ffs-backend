const routers = require("express").Router();

routers.use("/users", require("./users.router"));

module.exports = routers;
