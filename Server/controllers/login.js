let fn_login = async (ctx, next) => {
    await next();
    let
        name = ctx.request.body.user || '',
        password = ctx.request.body.psw || '';
    if (name === '亮哥' && password === 'zuishuai') {
        ctx.response.body = {result: {
                isAdmin: true
            }}
    } else {
        ctx.response.body = {result: {
                isAdmin: false
        }}
    }
};

module.exports = {
    'POST /login': fn_login
};

