const workTimeRouter = require('express').Router()
const {
  getAllWorkTime,
  getWorkTimeById,
  createWorkTime,
  updateWorkTime,
  deleteWorkTime
} = require('../controllers/workTime.controller')

workTimeRouter.get('/', getAllWorkTime)
workTimeRouter.get('/:id', getWorkTimeById)
workTimeRouter.post('/', createWorkTime)
workTimeRouter.patch('/:id', updateWorkTime)
workTimeRouter.delete('/:id', deleteWorkTime)

module.exports = workTimeRouter
