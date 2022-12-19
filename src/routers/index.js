const routers = require("express").Router();

routers.use("/users", require("./users.router"));
routers.use("/profileEmployee", require("./profileEmployee.router"));
routers.use("/workExperience", require("./workExperience.router"));
routers.use("/groupUsers", require("./groupUsers.router"));
routers.use("/skill", require("./skill.router"));
routers.use("/profileCompany", require("./profileCompany.router"));

module.exports = routers;
