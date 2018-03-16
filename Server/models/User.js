const mongoose = require('mongoose');
let usersSchema = require('../schemas/users');
//模型类
module.exports = mongoose.model('User',usersSchema);
