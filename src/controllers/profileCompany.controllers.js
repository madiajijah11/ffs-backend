const {
  getAllProfileCompany,
  createProfileCompany,
  getProfileCompanyById,
  updateProfileCompany,
  deleteProfileCompany,
} = require("../models/profileCompany.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllProfileCompany = async (req, res) => {
  try {
    const allProfileCompany = await getAllProfileCompany();
    res.status(200).json({
      success: true,
      message: "All Profile Company retrieved successfully",
      results: allProfileCompany,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.createProfileCompany = async (req, res) => {
  try {
    const ProfileCompany = await createProfileCompany(req.body);
    res.status(200).json({
      success: true,
      message: "Profile Company created successfully",
      results: ProfileCompany,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.getProfileCompanyById = async (req, res) => {
  try {
    const ProfileCompany = await getProfileCompanyById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Profile Company retrieved successfully",
      results: ProfileCompany,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.updateProfileCompany = async (req, res) => {
  try {
    const ProfileCompany = await updateProfileCompany(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Profile Company updated successfully",
      results: ProfileCompany,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.deleteProfileCompany = async (req, res) => {
  try {
    const ProfileCompany = await deleteProfileCompany(req.params.id);
    res.status(200).json({
      success: true,
      message: "Profile Company deleted successfully",
      results: ProfileCompany,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};
