const { response, request } = require("express");
const User = require("../models/usersModel");
const bcrypt = require('bcryptjs')

const registerUser = async (req = request, res = response) => {
  try {
    const { userName, password, email } = req.body;

    const user = await User.findOne({ userName })

    if (!user) {
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hashSync(password, salt)
      const user = new User({ userName, email, password: hashedPassword })
      await user.save()

      res.status(201).json({
        message: "El usuario fue creado correctamente"
      })
    } else {
      res.status(403).json({
        message: "El nombre de usuario ya existe"
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      msg: "Algo Ocurrio al crear un usuario",
      error
    })
  }
}

module.exports = {
  registerUser
}