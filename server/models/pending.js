var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Pending', new Schema({
  url: String,
  pages: [String],
  createdAt: {type: Date, default: Date.now}
}))