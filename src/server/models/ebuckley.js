const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  bio: String,
  socialMedia: [{
    link: String,
    // type is a reserved word in mongoose
    socialType: String
  }],
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill'
  }]
});

schema.virtual('fullName').get(function() {
  return `${this.name.firstName} ${this.name.lastName}`;
});

module.exports = mongoose.model('Ebuckley', schema);