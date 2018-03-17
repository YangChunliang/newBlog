let Category = require('../models/Category');
let Content = require('../models/Content');
const data = {
    category: '',
    count: '',
    page: 1,
    limit: 4,
    pages: 0
};
let getContent = async (ctx, next) => {
    // await next();
    //连接数据库获取数据
    //读取所有的分类信息
    let where = {};
    if (data.category) {
        where.category = data.category;
    }

    //异步操作，需要加上await
    await Content.where(where).count().then(function(count){
        data.count = count;
        //计算总页数
        data.pages = Math.ceil(data.count/data.limit);
        data.page = Math.min(data.page,data.pages);
        data.page = Math.max(data.page,1);
        //跳过的条数
        let skip = (data.page -1)*data.limit;
        return Content.where(where).find().sort({  addTime: -1  }).limit(data.limit).skip(skip);
    }).then(function(contents){
        data.content = contents;
        ctx.response.body = data;
    });
};

module.exports = {
    'GET /content': getContent
};
