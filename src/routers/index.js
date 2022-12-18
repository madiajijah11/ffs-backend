const routers = require("express").Router();

routers.use("/users", require("./users.router"));
routers.use("/profileEmployee", require("./profileEmployee.router"));
routers.use("/groupUsers", require("./groupUsers.router"));

module.exports = routers;
