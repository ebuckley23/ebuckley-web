const mongoose = require('mongoose');
const constants = require('../constants/index');
const plugins = require('../database/plugins');

const schema = new mongoose.Schema({
  ratingType: {
    type: Number,
    required: true,
    validate: (value) => {
      //must be of value enums
      return Object.values(constants.ratingEnum).includes(value);
    }
  }
});

schema.plugin(plugins.timestamp);

module.exports = mongoose.model('Rating', schema);