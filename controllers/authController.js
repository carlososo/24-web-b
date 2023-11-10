const { response, request} = require("express")
const User = require("../models/usersModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")

const authPost = async(req = request, res = response) => {
  const { email, password } = req.body
  try {

    //verificar si el usuario existe
    const user = await User.findOne({email})

    if(!user){
      return res.status(400).json({
        msg: "Usuario no encontrado"
      })
    }
    
    //verificar si el password es correcto
    const validPassword = bcryptjs.compareSync(password, user.password)
    if(!validPassword){
      return res.status(400).json({
        msg: "Password No Valido"
      })
    }

    //regresa el usuario:
    res.status(200).json({
      token:generateToken(user._id),
    })
    
  } catch (error) {
    res.status(500).json({
      message:'Error en el servidor desde Auth',
      error
    })
  }
  
}

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET,{
    expiresIn:'60m'
  })
}

module.exports = { authPost }