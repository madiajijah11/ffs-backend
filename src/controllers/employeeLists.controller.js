const errorHandler = require('../helpers/errorHandler.helper')
const {
  getEmployeeLists,
  countAllEmployeeLists
} = require('../models/employeeLists.model')
const filter = require('../helpers/filter.helper')

exports.getEmployeeLists = async (req, res) => {
  const sortables = ['skill', 'workTime', 'createdAt', 'updatedAt']
  try {
    const { params, pageInfo } = filter(
      req.query,
      sortables,
      countAllEmployeeLists
    )
    const result = await getEmployeeLists(params)
    return res.status(200).json({
      success: true,
      message: 'Employee lists retrieved successfully',
      pageInfo,
      results: result.rows
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}
