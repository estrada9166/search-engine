var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Page', new Schema({
  url: String,
  body: String,
  host: String,  
  repeated: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now }
}))