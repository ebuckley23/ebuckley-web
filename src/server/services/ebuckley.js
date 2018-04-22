const ebuckley = require('../models/ebuckley');
const db = require('../database');

class EbuckleyService {
  getEbuckley(result) {
    ebuckley.findOne({}, function(err, eb) {
      if(err) throw result(err);
      result(eb);
    });
  };

  createEbuckley(data, result) {
    ebuckley.create(data)
      .then(res => {
        result(res);
      })
      .catch(err => {
        console.log('err', err);
        result(err);
      });
  }
}

module.exports = new EbuckleyService();