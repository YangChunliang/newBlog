//用户模板
const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    //用户名
    username: String,
    //密码
    password: String,
    //判断是否是管理员
    isAdmin:{
        type: Boolean,
        default: false
    }
});
