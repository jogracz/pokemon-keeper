const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post(
  '/',
  [
    check('name', 'Please enter your name').notEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please make sure your password has at least 6 characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    // getting posted data
    const { name, email, password } = req.body;

    try {
      //Checking if psted email already exist
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ msg: 'User with this email already exists' });
      }

      // Instantiating new User model object with posted data
      user = new User({ name, email, password });

      // Let's hash the password! :)
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Data to send with Json Web token
      const payload = {
        user: {
          id: user.id
        }
      };

      // Creating Json Web Token
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
