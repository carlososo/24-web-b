const { response, request } = require("express");
const User = require("../models/usersModel");
const bcrypt = require('bcrypt')

const registerUser = async (req = request, res = response) => {
  try {
    const { userName, password, email } = req.body;

    res.status(201).json({
     r: "works"
    })

    if (!userName) {
      const salt = await bcrypt.genSalt(10);

      console.error("Salt", salt)

      bcrypt.hash(password, salt, async (err, hashedPassword) => {
        const user = new User({ userName, email, password: hashedPassword })
        await user.save()

        console.error("Hashed", hashedPassword)

        res.status(201).json({
          h: hashedPassword
        })
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