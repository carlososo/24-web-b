const { Schema } = require("mongoose")

const AddressSchema = Schema({
  street:{
    type:String,
  },
  number:{
    type:Number,
  },
  city:{
    type:String,
  }
})

module.exports = AddressSchema