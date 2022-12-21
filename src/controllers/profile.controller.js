const { getUserProfilEmployee, getUserProfilRecruiter } = require("../models/users.model");

const jwt = require("jsonwebtoken");
const errorHandler = require("../helpers/errorHandler.helper");

exports.userProfileEmployee = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = decoded;
  try {
    const user = await getUserProfilEmployee(id);
    return res.status(200).json({
      status: "success",
      message: "User profile",
      results: user,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.userProfileRecruiter = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = decoded;
  try {
    const user = await getUserProfilRecruiter(id);
    return res.status(200).json({
      status: "success",
      message: "User profile",
      results: user,
    });
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};
