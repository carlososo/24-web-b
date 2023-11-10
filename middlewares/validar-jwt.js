const {response, request} = require('express');
const jwt = require("jsonwebtoken");
const User = require("../models/usersModel")

const validarJWT = async(req= request, res = response, next)=>{
  const token = req.header("x-token")
  if(!token){
    return res.status(401).json({
      msg: "No hay token en la peticion"
    })
  }
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(id)

    if(!user){
      return res.status(401).json({
        msg: "Token No valido - Usuario no existe en la base de datos"
      })
    }
    req.usuario = user

    next()

  } catch (error) {
    return res.status(401).json({
      msg: "Token No valido"
    })
  }
}

module.exports = { validarJWT }