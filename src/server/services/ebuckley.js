const ebuckley = require('../models/ebuckley');
const db = require('../database');

class EbuckleyService {

  /**
   * Get the website ebuckley object
   */
  async getEbuckley() {
    const ret = await ebuckley.findOne({});
    return ret;
  };

  /**
   * Creates the Ebuckley object. This method would never be used and probably
   * should be removed
   * @param {data object} data 
   */
  async createEbuckley(data) {
    const result = await ebuckley.create(data);
    return result;
  }
}

module.exports = new EbuckleyService();