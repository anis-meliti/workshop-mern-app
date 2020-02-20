'use strict';

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  login: String,
  email: String,
  password: String
});

const User = mongoose.model('user', userSchema);

export default User;
