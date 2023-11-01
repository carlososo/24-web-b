const {response, request} = require("express");
const User = require("../models/usersModel");

const createUser = async(req = request, res = response) => {
  try{
    const { body } = req;
    const user = new User(body)
    await user.save()
    res.status(201).json({
      user
    })
  }catch(error){
    res.status(500).json({
      msg:"Algo Ocurrio al crear un usuario",
      error
    })
  }
}
const readUser = async(req, res) => {
  try {
    const { limit = 10 } = req.query
    const queryParam = {active:true}
    const recordLength = await User.countDocuments()
    const user = await User.find(queryParam).limit(Number(limit)).populate("service");
    res.json({
      recordLength,
      user
    })
  } catch (error) {
    res.status(500).json({
      msg:"Algo Ocurrio al leer usuarios",
      error
    })  
  }
}

const updateUser = async(req = request, res) => {
  try {
    const { params, body } = req;
    const { userId } = params;

    await User.findByIdAndUpdate(userId, body )
    const userToShow = await User.findById(userId)

    res.status(202).json({
      msg:"Los Usuarios se Modificaron con éxito",
      userToShow
    })
  } catch (error) {
    res.status(500).json({
      msg:"Algo Ocurrio al modificar el registro",
      error
    })  
  }
  
}

const deleteUser = async(req = request, res = response) =>{
  try {
    const { userId } = req.params;
    const deleteState = {"active": false}

    await User.findByIdAndUpdate( userId, deleteState );
    const userToShow = await User.findById( userId )

    res.status(202).json({
      msg:"Se Borro el registro",
      userToShow
    })
  } catch (error) {
    res.status(500).json({
      msg:"Algo Ocurrio al Eliminar el registro",
      error
    })  
  }
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser
}