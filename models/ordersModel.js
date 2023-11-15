const { Schema, model } = require('mongoose');

const OrderSchema = Schema({
  orderUser:{
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  products:[{
    type: Schema.Types.ObjectId,
    ref: 'Product',
  }],
  total:{
    type: Number,
    required: true
  },
  active:{
    type: Boolean,
    default: true
  },
})

module.exports = model('Product', OrderSchema)