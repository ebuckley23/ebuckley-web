const mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }
  _connect() {
    mongoose.connect(`${process.env.DB_URL}${process.env.DB_NAME}`)
      .then(_ => {
        console.log('Database successfully connected');
      })
      .catch(err => {
        console.error('Database connection error');
      })
  }
}

module.exports = new Database();