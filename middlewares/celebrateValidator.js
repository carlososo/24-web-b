const { celebrate, Segments } = require("celebrate");
const { schema: userSchema, schemaServices } = require("../validators/userValidator");


const celebrateValidator = celebrate({[Segments.BODY] : userSchema})
const celebrateValidatorServices = celebrate(
  {
    [Segments.BODY] : schemaServices
  }
)

module.exports = { 
  celebrateValidator,
  celebrateValidatorServices
}