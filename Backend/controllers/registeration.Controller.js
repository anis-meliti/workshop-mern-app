'use strict';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { jwtSecret } from '../config/default.json';

const registerController = {
  register: async (req, res) => {
    const { login, password, email } = req.body;
    try {
      const searchRes = await User.findOne({ login });

      if (searchRes)
        return res.status(500).json({ msgs: 'user already exist!' });
      const newUser = new User({
        login,
        password,
        email
      });
      bcrypt.genSalt(10, (err, salt) => {
        err
          ? console.log(err)
          : bcrypt.hash(password, salt, async (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              try {
                const addRes = await newUser.save();
                res.json(addRes);
              } catch (error) {
                console.error(error);
              }
            });
      });
    } catch (error) {
      console.error(error);
    }
  },
  login: async (req, res) => {
    const { login, password } = req.body;

    try {
      const searchUser = await User.findOne({ login });
      if (!searchUser)
        return res.status(400).json({ msgs: 'user doesnot exists !' });
      const isMatch = await bcrypt.compare(password, searchUser.password);
      if (!isMatch) return res.status(400).json({ msgs: 'bad credentials!' });
      const payload = {
        id: searchUser._id,
        email: searchUser.email
      };
      jwt.sign(payload, jwtSecret, (err, token) => {
        if (err) throw err;
        res.json({ token: 'Bearer ' + token });
      });
    } catch (error) {
      console.error(errors);
    }
  },
  current: (req, res) => {
    console.log('TCL: req', req);

    res.json(req.user);
  }
};

export default registerController;
