const { Schema, model } = require("mongoose")


const UserSchema = Schema({
  userName:{
    type:String,
    required: [true, "El userName es requerido"],
    unique:true 
  },
  email:{
    type:String,
    required: [true, "El email es requerido"],
    unique:true 
  },
  phoneNumber:{
    type:Number
  },
  password:{
    type:String,
    required: [true, "El password es requerido"]
  },
  active:{
    type: Boolean,
    default: true
  }
})

module.exports = model('User', UserSchema)