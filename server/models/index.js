const mongoose = require('mongoose');
mongoose.set('debug',true); //'debug': prints the operations mongoose sends to MongoDB to the console

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);
module.exports.User = require('./user');
module.exports.Poll = require('./poll');