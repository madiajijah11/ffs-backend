const workRoutes = require("express").Router();
const {
  getAllWorkExperience,
  createWorkExperience,
  getWorkExperienceById,
  updateWorkExperience,
  deleteWorkExperience,
} = require("../controllers/workExperience.controller");

workRoutes.get("/", getAllWorkExperience);
workRoutes.get("/:id", getWorkExperienceById);
workRoutes.post("/", createWorkExperience);
workRoutes.patch("/:id", updateWorkExperience);
workRoutes.delete("/:id", deleteWorkExperience);

module.exports = workRoutes;
