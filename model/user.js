const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const User = new Schema({
  name: { type: String, require: true},
  AddressWallet: {type: String, require: true},
  
}, { timestamps: true });

module.exports = mongoose.model('User', User);