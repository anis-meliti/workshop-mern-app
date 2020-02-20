'use strict';

import express from 'express';
import passport from 'passport';
import { registerRules, validator, loginRules } from '../middlewares/validator';
import registerController from '../controllers/registeration.Controller';
import { isAuth } from '../middlewares/passport-setup';

const Router = express.Router();

Router.post(
  '/register',
  registerRules(),
  validator,
  registerController.register
);
Router.post('/login', loginRules(), validator, registerController.login);
Router.get('/current', isAuth(), registerController.current);

export default Router;
