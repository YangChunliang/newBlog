const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const cors = require('koa-cors');

const serve = require("koa-static");

const fs = require('fs');

//加载数据库模块
const mongoose = require('mongoose');

const app = new Koa();

app.use(serve('./html'));
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
//找不到对用资源时返回index.html
// app.use(async (ctx, next) => {
//     fs.readFile('./html/index.html', 'utf-8', (err, content) => {
//         if (err) {
//             console.log('We cannot open "index.html" file.')
//         }
//         ctx.response.status = 200;
//         ctx.response.type = 'text/html,charset=utf-8';
//         ctx.response.body = content;
//     });
//     await next();
// });

app.use(cors());

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

//连接数据库
mongoose.connect('mongodb://younger:ycl251318@139.199.14.15:27027/Blog?authSource=admin',function(err){
    if (err) {
        console.log("database connect defeat");
    }else {
        console.log("database connect success")
    }
});

app.listen(3000);
console.log('app started at port 3000...');
