const errorCodes = require('../constants').errorCodes;

module.exports.Exception = (errorMessage, errorCode = errorCodes.MISSED_MY_BIRTHDAY) => {
  return {errorCode, errorMessage};
}