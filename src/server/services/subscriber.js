const subscriber = require('../models/subscriber');
const db = require('../database');
const error = require('../utils').Exception;

class SubscriberService {
  async getSubscriber({email, password}) {
    const ret = await subscriber.findOne({email});
    return ret;
  }

  async getSubscribers() {
    const subscribers = await subscriber.find({});
    return subscribers;
  }

  async addSubscriber(data) {
    if(data.admin) {
      result(error('Nope, a subscriber can only be added as an admin through the admin.'));
      return;
    }
    const result = await subscriber.create(data);
    return result;
  }
}

module.exports = new SubscriberService();
