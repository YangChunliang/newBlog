const mongoose = require('mongoose');
let categoriesSchema = require('../schemas/categories');
//模型类
module.exports = mongoose.model('Category',categoriesSchema);
