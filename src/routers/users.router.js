const usersRouter = require('express').Router()
const {
  getUsers,
  getUserProfilRoleById,
  createUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/users.controllers')
const { uploadMiddleware } = require('../middlewares/upload.muddleware')

usersRouter.get('/', getUsers)
usersRouter.get('/profil/:id', getUserProfilRoleById)
usersRouter.get('/:id', getUserById)
usersRouter.post('/', createUsers)
usersRouter.patch('/:id', uploadMiddleware, updateUser)
usersRouter.delete('/:id', deleteUser)

module.exports = usersRouter
