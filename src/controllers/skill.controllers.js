const {
  getAllSkill,
  createSkill,
  getSkillById,
  updateSkill,
  deleteSkill,
} = require("../models/skill.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllSkill = async (req, res) => {
  try {
    const allSkill = await getAllSkill();
    res.status(200).json({
      success: true,
      message: "All Skill retrieved successfully",
      results: allSkill,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.createSkill = async (req, res) => {
  try {
    const Skill = await createSkill(req.body);
    res.status(200).json({
      success: true,
      message: "Skill created successfully",
      results: Skill,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.getSkillById = async (req, res) => {
  try {
    const Skill = await getSkillById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Skill retrieved successfully",
      results: Skill,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const Skill = await updateSkill(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Skill updated successfully",
      results: Skill,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    const Skill = await deleteSkill(req.params.id);
    res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
      results: Skill,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};
