const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('Passed');
  }
);

module.exports = router;
