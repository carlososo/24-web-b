const jwt = require("jsonwebtoken")


const validateToken = (secret) => {
  return (req, res, next) => {

    const { authorization } = req.headers
    token = authorization.split(" ")[1]

    const payload = jwt.verify(token, secret)
    const isAdmin = payload.userName === "Pablo"
    // Si queremos checar un role de admin
    // const isAdmin = payload.role === "admin"

    if (isAdmin) {
      next()
    } else {
      return res.status(403).json({
        msg: "El usuario no es un administrador"
      })
    }
  }
}

module.exports = {
  validateToken
}