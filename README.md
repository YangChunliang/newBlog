# vue

> 用Vue写的个人博客系统

## Build Setup

``` bash
# 启动服务端
cd Server
npm install
npm start

# 启动客户端
cd Client
npm install
npm run dev
```
### 思考
#### http各个部分
#### 如何定义接口为子域名？
#### 引入koa2-connect-history-api-fallback解决history模式弊端
#### vue异步组件配合webpack代码分割功能实现懒加载
#### 单页面一直存在的问题：SEO和初次加载耗时较多的问题。
#### Nuxt.js（重新使用nuxt的模板引擎）、升级到https(腾讯云已找到教程，代价太大，稳定了再弄)
#### vue-router只能渲染组件到<router-view>里
#### 原双页面程序，webpack分别打包升级为单页面程序
#### children实现嵌套路由
#### Named Route 'BackManage' has a default child route. When navigating to this named route (:to="{name: 'BackManage'"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead.#### 
#### 当某个路由有子集路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性。解决办法：即去除父级的name属性即可。
#### 博客稳定即可，下一个项目准备使用SSR
#### 跨域请求的cookie设置失败，同域请求的设置成功
