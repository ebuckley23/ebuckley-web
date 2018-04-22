
const subscriberService = require('./subscriber');
const subscriber = require('../models/subscriber');
const jwt = require('jsonwebtoken');

class Authenticate {
  login({email, password}, result) {
    subscriberService.getSubscriber({email, password}, (user) => {
      user.verifyPassword(password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          result({token: jwt.sign({email: user.email, fullName: user.fullName, _id: user._id, isAdmin: user.admin}, process.env.SECRET_KEY)});
        } else {
          result({message: 'Unauthorized'});
        }
      })
    })
  }
}

module.exports = new Authenticate();