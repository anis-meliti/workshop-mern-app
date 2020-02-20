'use strict';

import { check, validationResult } from 'express-validator';

export const registerRules = () => [
  check('login', 'this field is required').notEmpty(),
  check('password', 'this field is required').notEmpty(),
  check('email', 'this field require a valid email').isEmail(),
  check('password', 'this field required length of 6 chars').isLength({
    min: 6,
    max: 20
  })
];

export const loginRules = () => [
  check('login', 'this field is required').notEmpty(),
  check('password', 'this field is required').notEmpty()
];

export const validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
