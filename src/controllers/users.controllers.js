const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../models/users.model");
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {
  try {
    const user = await getUsers();
    res.status(200).json({
      status: "success",
      message: "Users retrieved successfully",
      results: users,
    });
  } catch (error) {
    if (error) throw error;
  }
};
exports.createUsers = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const users = await createUser(req.body);
    res.status(200).json({
      status: "success",
      message: "Users created successfully",
      results: users,
    });
  } catch (error) {
    if (error) throw error;
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "User retrieved successfully",
      results: user,
    });
  } catch (error) {
    if (error) throw error;
  }
};

exports.updateUser = async (req, res) => {
  const { password } = req.body;
  if (password) {
    req.body.password = await bcrypt.hash(password, 10);
  }
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      results: user,
    });
  } catch (error) {
    if (error) throw error;
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
      results: user,
    });
  } catch (error) {
    if (error) throw error;
  }
};
