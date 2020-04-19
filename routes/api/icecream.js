const express = require('express');

const IceCream = require('../../models/IceCream');

const router = express.Router();

// @route   GET /api/icecream/
// @desc    Get all icecreams
// @access  Public
router.get('/', async (req, res) => {
  try {
    let IceCreams = await IceCream.find().sort('-price');
    return res.json({ iceCreams: IceCreams });
  } catch (err) {
    console.log(`Server Error ${err}`);
    return res.status(500).json({ error: 'Server Error' });
  }
});

// @route   POST /api/icecream
// @desc    Add an icecream
// @access  Public
router.post('/', async (req, res) => {
  let { name, flavor, price } = req.body;

  if (!name || !flavor || !price) {
    return res.status(401).json({ err: 'Invalid Input' });
  }

  try {
    let newIceCream = new IceCream({
      name,
      flavor,
      price
    });

    await newIceCream.save();
    return res.json({ success: true, iceCream: newIceCream });
  } catch (err) {
    console.log(`Server Error ${err}`);
    return res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
