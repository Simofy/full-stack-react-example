const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./models/user');
db.role = require('./models/roles');
db.table = require('./models/table');

db.ROLES = ['user', 'admin', 'moderator'];

module.exports = db;
