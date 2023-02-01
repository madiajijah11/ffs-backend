const portofolioEmployeeRouter = require('express').Router()
const {
  getAllPortofolioEmployee,
  createPortofolioEmployee,
  getPortofolioEmployeeById,
  updatePortofolioEmployee,
  deletePortofolioEmployee
} = require('../controllers/portofolioEmployee.controller')
const {} = require('../middlewares/upload.muddleware')

portofolioEmployeeRouter.get('/', getAllPortofolioEmployee)
portofolioEmployeeRouter.post('/', createPortofolioEmployee)
portofolioEmployeeRouter.get('/:id', getPortofolioEmployeeById)
portofolioEmployeeRouter.patch('/:id', updatePortofolioEmployee)
portofolioEmployeeRouter.delete('/:id', deletePortofolioEmployee)

module.exports = portofolioEmployeeRouter
