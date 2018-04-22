const mongoose = require('mongoose');
const plugins = require('../database/plugins');

const schema = new mongoose.Schema({
  name: String,
  description: String,
  ratings: [{
    rank: Number,
    created: {type: Date, default: Date.now}
  }],
  subscriberRatings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rating',
    ratedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subscriber'
    }
  }]
});

schema.plugin(plugins.timestamp);

module.exports = mongoose.model('Skill', schema);