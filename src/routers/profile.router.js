const profileRoutes = require("express").Router();
const { userProfile, updateUserProfile } = require("../controllers/profile.controller");

profileRoutes.get("/", userProfile);

module.exports = profileRoutes;
