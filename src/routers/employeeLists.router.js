const employeeLists = require("express").Router();
const {
  getEmployeeLists,
  getEmployeeById,
} = require("../controllers/employeeLists.controller");

employeeLists.get("/", getEmployeeLists);
// employeeLists.get("/:id", getEmployeeById);

module.exports = employeeLists;
