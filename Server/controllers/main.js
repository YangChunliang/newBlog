let getMain = async (ctx, next) => {
    await next();
};

module.exports = {
    'GET /': getMain
};
