const mongoose = require('mongoose');

const IceCreamFlavors = require('../util/flavors');

const IceCreamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'true',
    unique: true
  },
  flavor: {
    type: String,
    enum: IceCreamFlavors,
    required: true
  },
  price: {
    type: Number,
    min: 1,
    max: 100
  },
  url: {
    type: String,
    default: 'https://i.imgur.com/KeSyZN9.jpg'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = IceCream = mongoose.model('icecreams', IceCreamSchema);
