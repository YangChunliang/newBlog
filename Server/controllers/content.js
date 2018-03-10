let getContent = async (ctx, next) => {
    //连接数据库获取数据
    let dataArticle = [
        {
            title: "今天是个好日子1",
            content: "内容1"
        },
        {
            title: "今天是个好日子2",
            content: "内容2"
        },
        {
            title: "今天是个好日子3",
            content: "内容3"
        }
    ];
    ctx.response.body = dataArticle;
};

module.exports = {
    'GET /content': getContent
};
