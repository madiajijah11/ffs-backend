const {
  getAllProfileEmployee,
  createProfileEmployee,
  getProfileEmployeeById,
  updateProfileEmployee,
  deleteProfileEmployee,
  getProfileEmployee
} = require('../models/profileEmployee.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.getAllProfileEmployee = async (req, res) => {
  try {
    const allProfileEmployee = await getAllProfileEmployee()
    res.status(200).json({
      success: true,
      message: 'All Profile Employee retrieved successfully',
      results: allProfileEmployee
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.createProfileEmployee = async (req, res) => {
  try {
    const profileEmployee = await createProfileEmployee(req.body)
    res.status(200).json({
      success: true,
      message: 'Profile Employee created successfully',
      results: profileEmployee
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.getProfileEmployeeById = async (req, res) => {
  try {
    const profileEmployee = await getProfileEmployeeById(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Profile Employee retrieved successfully',
      results: profileEmployee
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.updateProfileEmployee = async (req, res) => {
  try {
    const profileEmployee = await updateProfileEmployee(
      req.params.id,
      req.body
    )
    res.status(200).json({
      success: true,
      message: 'Profile Employee updated successfully',
      results: profileEmployee
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.deleteProfileEmployee = async (req, res) => {
  try {
    const profileEmployee = await deleteProfileEmployee(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Profile Employee deleted successfully',
      results: profileEmployee
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.getProfileEmployee = async (req, res) => {
  try {
    const profileEmployee = await getProfileEmployee(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Profile Employee retrieved successfully',
      results: profileEmployee
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}
