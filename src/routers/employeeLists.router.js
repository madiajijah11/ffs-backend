const employeeLists = require("express").Router();
const {
  getEmployeeLists,
} = require("../controllers/employeeLists.controller");

employeeLists.get("/", getEmployeeLists);

module.exports = employeeLists;
