const {
  getAllPortofolioEmployee,
  createPortofolioEmployee,
  getPortofolioEmployeById,
  updatePortofolioEmployee,
  deletePortofolioEmployee,
  getPortofolioEmployeByUserId} = require('../models/portofolioEmployee.model')
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllPortofolioEmployee = async (req, res) => {
  try {
    const allPortofolioEmployee = await getAllPortofolioEmployee();
    res.status(200).json({
      success: true,
      message: "All Portofolio Employee retrieved successfully",
      results: allPortofolioEmployee,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.createPortofolioEmployee = async (req, res) => {
  try {
    const users = await createPortofolioEmployee(req.body);
    res.status(200).json({
      success: true,
      message: "Portofolio employee created successfully",
      results: users,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.getPortofolioEmployeeById = async (req, res) => {
  try {
    const portofolioEmployee = await getPortofolioEmployeById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Portofolio employee retrieved successfully",
      results: portofolioEmployee,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.updatePortofolioEmployee = async (req, res) => {
  try {
    const portofolioEmployee = await updatePortofolioEmployee(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Portofolio employee updated successfully",
      results: portofolioEmployee,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.deletePortofolioEmployee = async (req, res) => {
  try {
    const portofolioEmployee = await deletePortofolioEmployee(req.params.id);
    res.status(200).json({
      success: true,
      message: "Portofolio employee deleted successfully",
      results: portofolioEmployee,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};