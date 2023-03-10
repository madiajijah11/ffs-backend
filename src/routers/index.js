const routers = require('express').Router()

routers.use('/users', require('./users.router'))
routers.use('/profileEmployee', require('./profileEmployee.router'))
routers.use('/workExperience', require('./workExperience.router'))
routers.use('/groupUsers', require('./groupUsers.router'))
routers.use('/skill', require('./skill.router'))
routers.use('/profileCompany', require('./profileCompany.router'))
routers.use('/employeeSkill', require('./skillEmployee.router'))
routers.use('/workTime', require('./workTime.router'))
routers.use('/forgotPassword', require('./forgotPasswords.router'))
routers.use('/employeeLists', require('./employeeLists.router'))
routers.use('/portfolioEmployee', require('./portofolioEmployee.router'))
routers.use('/profile', require('./profile.router'))
routers.use('/message', require('./message.router'))

routers.use('/auth', require('./auth.router'))

module.exports = routers
