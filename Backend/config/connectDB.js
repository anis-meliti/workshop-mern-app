'use strict';

import mongoose from 'mongoose';

import { mongoUri } from './default.json';

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      err => (err ? console.error(err) : console.log('db connected...'))
    );
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
