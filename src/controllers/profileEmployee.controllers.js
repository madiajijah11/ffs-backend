const {
  getAllProfileEmployee,
  createProfileEmployee,
  getProfileEmployeeById,
  updateProfileEmployee,
  deleteProfileEmployee,
} = require("../models/profileEmployee.model");

exports.getAllProfileEmployee = async (req, res) => {
  try {
    const allProfileEmployee = await getAllProfileEmployee();
    res.status(200).json({
      status: "success",
      message: "All Profile Employee retrieved successfully",
      results: allProfileEmployee,
    });
  } catch (error) {
    if (error) throw error;
  }
};

exports.createProfileEmployee = async (req, res) => {
  try {
    const profileEmployee = await createProfileEmployee(req.body);
    res.status(200).json({
      status: "success",
      message: "Profile Employee created successfully",
      results: profileEmployee,
    });
  } catch (err) {
    if (err) throw err;
  }
};

exports.getProfileEmployeeById = async (req, res) => {
  try {
    const profileEmployee = await getProfileEmployeeById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Profile Employee retrieved successfully",
      results: profileEmployee,
    });
  } catch (err) {
    if (err) throw err;
  }
};

exports.updateProfileEmployee = async (req, res) => {
  try {
    const profileEmployee = await updateProfileEmployee(
      req.params.id,
      req.body
    );
    res.status(200).json({
      status: "success",
      message: "Profile Employee updated successfully",
      results: profileEmployee,
    });
  } catch (err) {
    if (err) throw err;
  }
};

exports.deleteProfileEmployee = async (req, res) => {
  try {
    const profileEmployee = await deleteProfileEmployee(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Profile Employee deleted successfully",
      results: profileEmployee,
    });
  } catch (err) {
    if (err) throw err;
  }
};
