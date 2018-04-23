let Category = require('../models/Category');
let Content = require('../models/Content');
const data = {
    category: '',
    count: 0,  //返回的条数
    page: 0,   //第几页数据
    limit: '',  //每页的数据
    pages: 0   //总页数
};
let getContent = async (ctx, next) => {
    data.page = Number(ctx.request.query.page) || 1;//前端请求第几页的数据
    data.category = ctx.request.query.category || '';//请求文章的分类，不传则返回全部文章
    data.limit = Number(ctx.request.query.limit) || 4;
    // console.log(data.limit);
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
        return Content.where(where).find().sort({  addTime: -1  }).limit(data.limit).skip(skip).populate(['category','user']);
    }).then(function(contents){
        data.content = contents;
        ctx.response.body = data;
    });
    next();
};

let getView = async (ctx, next) => {
    let contentId = ctx.request.query.contentid || '';
    await Content.findOne({
        _id: contentId
    }).then(function(content){
        data.content = content;
        content.views++;
        content.save();
        ctx.response.body = data;
    });
    next();
};

let getCategory = async(ctx, next) => {
    await Category.find().then(function (categories) {
        ctx.response.body = categories;
    });
    next();
};
module.exports = {
    'GET /content': getContent, //获取批量文章接口
    'GET /view': getView,   //获取单个文章接口
    'GET /category': getCategory //获取全部分类
};
