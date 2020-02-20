'use strict';
import express from 'express';
import passport from 'passport';

import connectDB from './config/connectDB';
import user from './routes/user';
import getStrategy from './middlewares/passport-setup';

const app = express();

app.use(express.json());
// passport.initialize();
// getStrategy(passport);

connectDB();

app.use('/', user);
const PORT = process.env.PORT || 6000;

app.listen(PORT, err =>
  err ? console.error(err) : console.log(`🚀 is 🐇 on ${PORT}`)
);
