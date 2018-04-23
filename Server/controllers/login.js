let User = require('../models/User');
let fn_login = async (ctx, next) => {
    const responseData = {
        code : 0,
        message : '登录成功！'
    };
    //查询数据库中相同用户名和密码的记录是否存在
    await User.findOne({
        username: ctx.request.body.user || '',
        password: ctx.request.body.psw || ''
    }).then(function(userInfo){
        if (userInfo) {
            ctx.cookies.set('userName', userInfo.username);
            ctx.cookies.set('userId', userInfo._id);
        }else{
            responseData.message = "密码错误!";
            responseData.code = 1;
        }
        ctx.response.body = responseData;
    });
    next();
};
let is_login = async (ctx, next) => {
    const objJson = {code:1};
    let name = ctx.cookies.get('userName');
    let userid = ctx.cookies.get('userId');
    if(name){
        objJson.code = 0;
        objJson.username = name;
        objJson.id = userid;
    }
    ctx.response.body = objJson;
    await next();
};
let login_out = async (ctx, next) => {
    ctx.cookies.set('userName', '');
    ctx.response.body = {code:0};
    await next();
};
module.exports = {
    'POST /login': fn_login,
    'GET /islogin': is_login,
    'GET /loginout': login_out
};

