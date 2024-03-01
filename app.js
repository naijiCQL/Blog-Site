/*
 * @Author: 陈巧龙
 * @Date: 2024-02-27 14:02:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-01 13:24:50
 * @FilePath: \Node_Study\app.js
 * @Description: 服务端配置
 */
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

//创建一个 Express应用程序实例
const app = express()

//连接mongobd数据库
mongoose.connect('mongodb://localhost:27017')
    .then(() => { console.log(' The MongoDB database has been successfully connected!') })
    .catch((err) => { console.log(err) })

//注册ejs视图引擎，用于联动ejs文件
app.set('view engine', 'ejs')

//express内置中间件函数（读取静态文件）
app.use(express.static('public'));

//使用urlencoded中间件有效负载解析传入的请求
//包含解析数据的新body对象在中间件（即 req.body）之后填充到 request 对象上
app.use(express.urlencoded({ extended: true }))

//morgan的使用（日志记录）
app.use(morgan('tiny'))

//当前端请求的url为'/'，则服务端进行响应将url重定向为'/blogs'
app.get('/', function (req, res) {
    //重定向
    res.redirect('/blogs')
})

//当前端请求的url为'/about'，则服务端进行响应跳转至about页面
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

//blog路由，提取公共路由blogs
//当前端请求的url为'/blogs'，则服务端进行响应根据路由进行匹配
app.use('/blogs', blogRoutes)

//当前端请求都未被匹配，则服务端进行以下响应
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

//监听8080端口号
app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/')
})