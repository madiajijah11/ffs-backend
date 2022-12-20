const { getUser } = require("../models/profle.model");
const { getWorkExperienceByUserId } = require("../models/workExperience.model");
const {
  getPortofolioEmployeByUserId,
} = require("../models/portofolioEmployee.model");
const jwt = require("jsonwebtoken");
const errorHandler = require("../helpers/errorHandler.helper");
const fs = require("fs");

exports.userProfile = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = decoded;
  try {
    const user = await getUser(id);
    const workExperience = await getWorkExperienceByUserId(id);
    const portofolioEmployee = await getPortofolioEmployeByUserId(id);
    const results = {
      user,
      workExperience,
      portofolioEmployee,
    };
    return res.status(200).json({
      status: "success",
      message: "User profile",
      results,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};
