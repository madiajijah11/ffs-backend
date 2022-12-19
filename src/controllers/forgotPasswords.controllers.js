const {
  getAllForgotPassword,
  createForgotPassword,
  getForgotPasswordById,
  updateForgotPassword,
  deleteForgotPassword,
} = require("../models/ForgotPasswords.model");

const modelUser = require("../models/users.model")

const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllForgotPassword = async (req, res) => {
  try {
    const allForgotPassword = await getAllForgotPassword();
    res.status(200).json({
      success: true,
      message: "All Forgot Password retrieved successfully",
      results: allForgotPassword,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.createForgotPassword = async (req, res) => {
  try {
    const userByEmail = await modelUser.getUserByEmail(req.body.email);
    try{
      const codeRandom = Math.ceil(Math.random() * 100000 +1)
      const value = {
        email: userByEmail.email,
        code: codeRandom
      }
      const ForgotPassword = await createForgotPassword(value);
      res.status(200).json({
        success: true,
        message: "Forgot Password created successfully",
        results: ForgotPassword,
      });

    } catch (error){
      if (error) return errorHandler(error, res);
    }

  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.getForgotPasswordById = async (req, res) => {
  try {
    const ForgotPassword = await getForgotPasswordById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Forgot Password retrieved successfully",
      results: ForgotPassword,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.updateForgotPassword = async (req, res) => {
  try {
    const ForgotPassword = await updateForgotPassword(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Forgot Password updated successfully",
      results: ForgotPassword,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.deleteForgotPassword = async (req, res) => {
  try {
    const ForgotPassword = await deleteForgotPassword(req.params.id);
    res.status(200).json({
      success: true,
      message: "Forgot Password deleted successfully",
      results: ForgotPassword,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};
