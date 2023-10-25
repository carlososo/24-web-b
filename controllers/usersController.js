const {response, request} = require("express")

const createUser = (req = request, res = response) => {
  const { body } = req;
  
  console.log(body)
  res.json({
    msg:"Hola desde el Controller file"
  })
}

const readUser = (req, res) => {
  res.json({
    msg: "Leer usuarios desde Controller"
  })
}

const updateUser = (req = request, res) => {
  const { params, query } = req
  console.log(query)
  res.json({
    msg:"Modificar usuarios desde controller"
  })
}

const deleteUser = (req, res) =>{
  res.json({
    msg:"Borrar usuarios desde controller"
  })
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser
}