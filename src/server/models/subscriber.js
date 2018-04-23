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

  // // lets get salty
  // bcrypt.genSalt(Number(process.env.SALT_WORK_FACTOR), function(err, salt) {
  //   if (err) return next(error);
  //   // salt + hash
  //   bcrypt.hash(user.password, salt, function(err, hash) {
  //     if (err) return next(err);
  //     user.password = hash;
  //     next();
  //   });
  // });
});

schema.methods.verifyPassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if(err) return cb(err);

    cb(null, isMatch);
  });
};

schema.plugin(plugins.timestamp);

module.exports = mongoose.model('Subscriber', schema);