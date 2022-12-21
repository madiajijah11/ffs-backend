const profileRoutes = require("express").Router();
const {
  userProfileEmployee,
  userProfileRecruiter,
} = require("../controllers/profile.controller");

profileRoutes.get("/employee", userProfileEmployee);
profileRoutes.get("/recruiter", userProfileRecruiter);

module.exports = profileRoutes;
