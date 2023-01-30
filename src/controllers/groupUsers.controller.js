const {
  getGroupUsers,
  getGroupUserById,
  createGroupUser,
  updateGroupUser,
  deleteGroupUser
} = require('../models/groupUsers.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.getGroupUsers = async (req, res) => {
  try {
    const groupUsers = await getGroupUsers()
    res.status(200).json({
      success: true,
      message: 'Group Users retrieved successfully',
      results: groupUsers
    })
  } catch (error) {
    if (error) errorHandler(error, res)
  }
}

exports.getGroupUserById = async (req, res) => {
  try {
    const groupUser = await getGroupUserById(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Group User retrieved successfully',
      results: groupUser
    })
  } catch (error) {
    if (error) errorHandler(error, res)
  }
}

exports.createGroupUser = async (req, res) => {
  try {
    const groupUser = await createGroupUser(req.body)
    res.status(200).json({
      success: true,
      message: 'Group User created successfully',
      results: groupUser
    })
  } catch (error) {
    if (error) errorHandler(error, res)
  }
}

exports.updateGroupUser = async (req, res) => {
  try {
    const groupUser = await updateGroupUser(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Group User updated successfully',
      results: groupUser
    })
  } catch (error) {
    if (error) errorHandler(error, res)
  }
}

exports.deleteGroupUser = async (req, res) => {
  try {
    const groupUser = await deleteGroupUser(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Group User deleted successfully',
      results: groupUser
    })
  } catch (error) {
    if (error) errorHandler(error, res)
  }
}
