const ProfileCompany = require("express").Router();
const {
  getAllProfileCompany,
  createProfileCompany,
  getProfileCompanyById,
  updateProfileCompany,
  deleteProfileCompany,
} = require("../controllers/profileCompany.controllers");

ProfileCompany.get("/", getAllProfileCompany);
ProfileCompany.get("/:id", getProfileCompanyById);
ProfileCompany.post("/", createProfileCompany);
ProfileCompany.patch("/:id", updateProfileCompany);
ProfileCompany.delete("/:id", deleteProfileCompany);

module.exports = ProfileCompany;
