const {
  getSkillEmpolyee,
  getSkillEmployeeById,
  createSkillEmployee,
  updateSkillEmployee,
  deleteSkillEmployee
} = require("../models/SkillEmployee.model")
const errorHandler = require("../helpers/errorHandler.helper");

exports.getSkillEmployees = async(req ,res )=>{
  try{
    const skillEmployee = await getSkillEmpolyee()
    res.status(200).json({
      success : true,
      message: "Skill Employee retrieved successfully",
      results : skillEmployee
    })
  }catch(err){
    if(err) errorHandler(err ,res)
  }
}

exports.getSkillEmployeeById = async (req, res) => {
  try {
    const SkillEmployee = await getSkillEmployeeById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Skill Employee retrieved successfully",
      results: SkillEmployee,
    });
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

exports.createSkillEmployee = async (req, res) => {
  try {
    const skillEmployee = await createSkillEmployee(req.body);
    res.status(200).json({
      success: true,
      message: "Skill Employee created successfully",
      results: skillEmployee,
    });
  } catch (error) {
    if (error) {errorHandler(error, res);}
  }
};

exports.updateSkillEmployee = async (req, res) => {
  try {
    const skillEmployee = await updateSkillEmployee(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Skill Employee updated successfully",
      results: skillEmployee,
    });
  } catch (error) {
    console.log(error)
    if (error) errorHandler(error, res);
  }
};

exports.deleteSkillEmployee = async (req, res) => {
  try {
    const skillEmployee = await deleteSkillEmployee(req.params.id);
    res.status(200).json({
      success: true,
      message: "Skill Employee deleted successfully",
      results: skillEmployee,
    });
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};



