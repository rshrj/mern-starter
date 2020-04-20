const express = require('express');
const { validationResult } = require('express-validator');

const IceCream = require('../../models/IceCream');
const { validateIceCream } = require('../../util/validation');

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
    return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
  }
});

// @route   POST /api/icecream
// @desc    Add an icecream
// @access  Public
router.post('/', validateIceCream, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let { name, flavor, price, url } = req.body;

  try {
    let exists = await IceCream.countDocuments({ name });

    if (exists) {
      return res
        .status(422)
        .json({ errors: [{ msg: 'Ice Cream Already Exists' }] });
    }

    let newIceCream = new IceCream({
      name,
      flavor,
      price
    });

    if (url !== '') {
      newIceCream.url = url;
    }

    await newIceCream.save();
    return res.json({ success: true, iceCream: newIceCream });
  } catch (err) {
    console.log(`Server Error ${err}`);
    return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
  }
});

module.exports = router;
