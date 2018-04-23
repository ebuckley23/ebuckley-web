const ebuckley = require('../models/ebuckley');
const db = require('../database');

class EbuckleyService {
  async getEbuckley() {
    const ret = await ebuckley.findOne({});
    return ret;
  };

  async createEbuckley(data) {
    const result = await ebuckley.create(data);
    return result;
  }
}

module.exports = new EbuckleyService();