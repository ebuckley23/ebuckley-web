const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const validator = require('validator');
const plugins = require('../database/plugins');

const schema = new mongoose.Schema({
  name: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: {unique: true},
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    }
  },
  password: {type: String, required: true},
  admin: Boolean
});

schema.virtual('fullName').get(function() {
  return `${this.name.firstName} ${this.name.lastName}`;
});

// https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
schema.pre('save', async function(next) {
  try {
    const user = this;

    if(!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(Number(process.env.SALT_WORK_FACTOR));

    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;

    return next();
  } catch(e) {
    return next(e);
  }
});

schema.methods.verifyPassword = async function(pw, cb) {
  const isMatch = await bcrypt.compare(pw, this.password);
  return isMatch;
};

schema.plugin(plugins.timestamp);

module.exports = mongoose.model('Subscriber', schema);