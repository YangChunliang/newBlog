let fn_hello = async (ctx, next) => {
    ctx.response.body = `hello数据`;
};

module.exports = {
    'GET /hello': fn_hello
};
