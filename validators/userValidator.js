const Joi = require("joi");

const schema = Joi.object().keys({
  userName: Joi.string().min(3).max(30).required().messages({
    "string.base": "El Nombre de usuario debe de ser un string",
    "string.empty":"El username no debe de estar vacio",
    "string.min":"El username debe de tener un minimo de {#limit} caracteres "
  }),
  email: Joi.string().email().required().messages({
    "string.email": "El campo email debe de tener un formato valido"
  }),
  phoneNumber : Joi.number().min(8),
  password : Joi.string().min(3).max(30).required(),
  service: Joi.string(),
})

module.exports = { schema }