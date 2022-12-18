const profileEmployee = require("express").Router();
const {
  getAllProfileEmployee,
  createProfileEmployee,
  getProfileEmployeeById,
  updateProfileEmployee,
  deleteProfileEmployee,
} = require("../controllers/profileEmployee.controllers");

profileEmployee.get("/", getAllProfileEmployee);
profileEmployee.get("/:id", getProfileEmployeeById);
profileEmployee.post("/", createProfileEmployee);
profileEmployee.patch("/:id", updateProfileEmployee);
profileEmployee.delete("/:id", deleteProfileEmployee);

module.exports = profileEmployee;
