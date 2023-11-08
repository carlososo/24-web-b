const { Schema, model } = require("mongoose")
const Service = require('./servicesModel');
const AddressSchema = require('./addressModel')



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
  },
  service:{
    type: Schema.Types.ObjectId,
    ref: 'Service',
  },
  address:{
    type:AddressSchema,
  },
})

UserSchema.pre('save', async function(next) {
  if (!this.service) {
    const defaultService = await Service.findOne({ name: 'NORMAL' });
    console.log(defaultService)
    this.service = defaultService._id;
  }
  next();
});

module.exports = model('User', UserSchema)