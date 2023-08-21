const mongoose = require('mongoose');
const userModel = require('./user_model');

const noteSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: userModel.modelName,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
  });
  
  const noteModel = mongoose.model('Note', noteSchema);
  

module.exports = noteModel;