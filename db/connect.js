const mongose = require("mongoose");

const connectdb = (url) => {
  return mongose.connect(url);
};

module.exports = connectdb;
