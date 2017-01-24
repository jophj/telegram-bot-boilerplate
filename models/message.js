var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  id: Number,
  date: Date,
  text: String
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;