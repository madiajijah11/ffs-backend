const skill = require('express').Router()
const {
  getAllSkill,
  createSkill,
  getSkillById,
  updateSkill,
  deleteSkill
} = require('../controllers/skill.controllers')

skill.get('/', getAllSkill)
skill.get('/:id', getSkillById)
skill.post('/', createSkill)
skill.patch('/:id', updateSkill)
skill.delete('/:id', deleteSkill)

module.exports = skill
