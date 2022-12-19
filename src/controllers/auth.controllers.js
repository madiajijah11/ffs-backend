const errorHandler = require("../helpers/errorHandler.helper");
const { selectUserByEmail, updateUser } = require("../models/users.model");
const {
  createForgotPassword,
  selectUserByEmailAndCode,
  deleteForgotPassword,
} = require("../models/forgotPasswords.model");
const bcrypt=require("bcrypt")

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const users = await selectUserByEmail(email);
    if (users) {
      const data = {
        email,
        userId: users.id,
        code: Math.ceil(Math.random() * 90000 + 10000),
      };
      await createForgotPassword(data);
      res.status(200).json({
        success: true,
        message: "Reset password has been requested.",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body; //destruc dari req.body
    if (password === confirmPassword) {
      const users = await selectUserByEmailAndCode(req.body);
      if (users) {
        const reset = await updateUser(users.userId, { password });
        reset.password = await bcrypt.hash(reset.password, 10)
        if (reset) {
          await deleteForgotPassword(users.id);
          return res.status(200).json({
            success: true,
            message: "Password updated, please relogin.",
          });
        }
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "password and confirm password must be match",
      });
    }
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

module.exports = { forgotPassword, resetPassword };
