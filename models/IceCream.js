const mongoose = require('mongoose');

const IceCreamFlavors = ['Chocolate', 'Vanilla', 'Butterscotch', 'Pista'];

const IceCreamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'true'
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
  }
});

module.exports = IceCream = mongoose.model('icecreams', IceCreamSchema);
