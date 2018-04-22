const subscriber = require('../models/subscriber');
const db = require('../database');
const error = require('../utils').Exception;

class SubscriberService {
  getSubscriber({email, password}, result) {
    subscriber.findOne({email}, function(err, s) {
      if(err) throw err;
      result(s);
    });
  }

  getSubscribers(result) {
    subscriber.find({}, function(err, subscribers) {
      if(err) throw err;
      result(subscribers);
      return;
    });
  }

  addSubscriber(data, result) {
    if(data.admin) {
      result(error('Nope, a subscriber can only be added as an admin through the admin.'));
      return;
    }
    subscriber.create(data)
      .then(res => {
        result(res);
      })
      .catch(err => {
        result(err);
      })
  }
}

module.exports = new SubscriberService();
