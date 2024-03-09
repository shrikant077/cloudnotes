// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user' //reference model
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model('notes',notesSchema); // model name and schema passed as attributes
