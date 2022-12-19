const {
  getAllWorkTime,
  createWorkTime,
  getWorkTimeById,
  updateWorkTime,
  deleteWorkTime,
} = require("../models/workTime.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllWorkTime = async (req, res) => {
  try {
    const allWorkTime = await getAllWorkTime();
    res.status(200).json({
      success: true,
      message: "All WorkTime retrieved successfully",
      results: allWorkTime,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.createWorkTime = async (req, res) => {
  try {
    const WorkTime = await createWorkTime(req.body);
    res.status(200).json({
      success: true,
      message: "WorkTime created successfully",
      results: WorkTime,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.getWorkTimeById = async (req, res) => {
  try {
    const WorkTime = await getWorkTimeById(req.params.id);
    res.status(200).json({
      success: true,
      message: "WorkTime retrieved successfully",
      results: WorkTime,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.updateWorkTime = async (req, res) => {
  try {
    const WorkTime = await updateWorkTime(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "WorkTime updated successfully",
      results: WorkTime,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.deleteWorkTime = async (req, res) => {
  try {
    const WorkTime = await deleteWorkTime(req.params.id);
    res.status(200).json({
      success: true,
      message: "WorkTime deleted successfully",
      results: WorkTime,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};
