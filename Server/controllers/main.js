let getMain = async (ctx, next) => {

    //连接数据库获取数据

    ctx.response.body = dataArticle;
    await next();
};

module.exports = {
    'GET /': getMain
};
