
const subscriberService = require('./subscriber');
const subscriber = require('../models/subscriber');
const jwt = require('jsonwebtoken');

class Authenticate {
   /**
   * Login method that authenticates a subscriber and returns
   * a jwt token
   * @param email email object property
   * @param password password object property
   */
  async login({email, password}) {
    const user = await subscriberService.getSubscriber({email, password}); 
    const verified = await user.verifyPassword(password);

    if (verified) {
      return {token: jwt.sign({email: user.email, fullName: user.fullName, _id: user._id, isAdmin: user.admin}, process.env.SECRET_KEY)};
    } else {
      return {message: 'Unauthorized'}
    }
  }
}

module.exports = new Authenticate();