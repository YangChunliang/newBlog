const fs = require('fs');
let getLogin = async (ctx, next) => {
    await next();
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./views/backManage.html');
};

module.exports = {
    'GET /login': getLogin
};
