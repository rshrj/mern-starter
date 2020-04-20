const { body } = require('express-validator');

const IceCreamFlavors = require('./flavors');

module.exports.validateIceCream = [
  body('name', 'Please enter a name').not().isEmpty(),
  body('flavor', 'Please select a flavor').isIn(IceCreamFlavors),
  body('price', 'Please enter a price').not().isEmpty(),
  body('url', 'Enter a valid url').if(body('url').not().isEmpty()).isURL()
];
