const profileEmployee = require('express').Router()
const {
  getAllProfileEmployee,
  createProfileEmployee,
  getProfileEmployeeById,
  updateProfileEmployee,
  deleteProfileEmployee,
  getProfileEmployee
} = require('../controllers/profileEmployee.controllers')

profileEmployee.get('/', getAllProfileEmployee)
profileEmployee.get('/:id', getProfileEmployeeById)
profileEmployee.get('/update/:id', getProfileEmployee)
profileEmployee.post('/', createProfileEmployee)
profileEmployee.patch('/:id', updateProfileEmployee)
profileEmployee.delete('/:id', deleteProfileEmployee)

module.exports = profileEmployee
