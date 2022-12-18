const routers = require("express").Router();

routers.use("/users", require("./users.router"));
routers.use("/profileEmployee", require("./profileEmployee.router"));

module.exports = routers;
