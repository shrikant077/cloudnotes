// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

});

const User = mongoose.model('user',userSchema); // model name and schema passed as attributes
// User.createIndexes();
module.exports = User
