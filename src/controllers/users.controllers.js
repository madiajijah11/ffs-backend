const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserProfilEmployee,
  getUserProfilRecruiter
} = require('../models/users.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.getUsers = async (req, res) => {
  try {
    const users = await getUsers()
    res.status(200).json({
      success: true,
      message: 'Users retrieved successfully',
      results: users
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}
exports.createUsers = async (req, res) => {
  try {
    const users = await createUser(req.body)
    res.status(200).json({
      success: true,
      message: 'Users created successfully',
      results: users
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.getUserById = async (req, res) => {
  try {
    const user = await getUserById(req.params.id)
    res.status(200).json({
      success: true,
      message: 'User retrieved successfully',
      results: user
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.getUserProfilRoleById = async (req, res) => {
  try {
    const user = await getUserById(req.params.id)
    if (user.groupUser === 1) {
      const employee = await getUserProfilEmployee(user.id)
      try {
        res.status(200).json({
          success: true,
          message: 'User retrieved successfully',
          results: employee
        })
      } catch (error) {
        if (error) return errorHandler(error, res)
      }
    } else if (user.groupUser === 2) {
      const recruiter = await getUserProfilRecruiter(user.id)
      try {
        res.status(200).json({
          success: true,
          message: 'User retrieved successfully',
          results: recruiter
        })
      } catch (error) {
        if (error) return errorHandler(error, res)
      }
    }
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.updateUser = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      results: user
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id)
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      results: user
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}
