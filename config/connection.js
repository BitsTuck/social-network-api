const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://social:social@cluster0.wfklrsi.mongodb.net/');

module.exports = mongoose.connection;