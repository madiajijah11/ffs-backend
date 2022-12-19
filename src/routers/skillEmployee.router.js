const skillEmployeeRouter = require("express").Router();
const {
  getSkillEmployees,
  getSkillEmployeeById,
  createSkillEmployee,
  updateSkillEmployee,
  deleteSkillEmployee
} = require("../controllers/employeeSkill.controller");

skillEmployeeRouter.get("/", getSkillEmployees);
skillEmployeeRouter.get("/:id", getSkillEmployeeById);
skillEmployeeRouter.post("/", createSkillEmployee);
skillEmployeeRouter.patch("/:id", updateSkillEmployee);
skillEmployeeRouter.delete("/:id", deleteSkillEmployee);

module.exports = skillEmployeeRouter;
