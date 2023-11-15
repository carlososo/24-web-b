const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
  name:{
    type: String,
    required: true,
    unique: true
  }, 
  code:{
    type: String,
    required: true,
    unique: true
  }, 
  category:{
    type: String,
    required: true,
  }, 
  cost:{
    type: Number,
  }, 
  active:{
    type: Boolean,
    default: true
  },
})

module.exports = model('Product', ProductSchema)