const {
  getAllWorkExperience,
  createWorkExperience,
  getWorkExperienceById,
  updateWorkExperience,
  deleteWorkExperience,
} = require("../models/workExperience.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllWorkExperience = async (req, res) => {
  try {
    const displayAllWorkExperience = await getAllWorkExperience();
    res.status(200).json({
      success: true,
      message: "All Work Experience retrieved successfully",
      results: displayAllWorkExperience,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.createWorkExperience = async (req, res) => {
  try {
    const insertWorkExperience = await createWorkExperience(req.body);
    res.status(200).json({
      success: true,
      message: "Work Experience created successfully",
      results: insertWorkExperience,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.getWorkExperienceById = async (req, res) => {
  try {
    const displayAllWorkExperienceById = await getWorkExperienceById(req.params.id);
    if (req.params.id !== displayAllWorkExperienceById.id) {
      return errorHandler(error, res)
    } else {
      res.status(200).json({
        success: true,
        message: "Work Experience retrieved successfully",
        results: displayAllWorkExperienceById,
      });
    }
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.updateWorkExperience = async (req, res) => {
  try {
    const updateWorkExperiences = await updateWorkExperience(
      req.params.id,
      req.body
    );
    if (req.params.id !== updateWorkExperiences.id) {
      return errorHandler(error, res)
    } else {
      res.status(200).json({
        success: true,
        message: "Work Experience updated successfully",
        results: updateWorkExperiences,
      });
    }
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.deleteWorkExperience = async (req, res) => {
  try {
    const deleteWorkExperiences = await deleteWorkExperience(req.params.id);
    if (req.params.id !== deleteWorkExperiences.id) {
      return errorHandler(error, res)
    } else {
      res.status(200).json({
        success: true,
        message: "Work Experience deleted successfully",
        results: deleteWorkExperiences,
      });
    }
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};
