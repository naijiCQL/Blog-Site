const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

//创建一个 Express应用程序实例
const app = express()

//连接mongobd数据库
mongoose.connect('mongodb://localhost:27017')
    .then((result) => { console.log('connect to mongoose') })
    .catch((err) => { console.log(err) })

//注册ejs视图引擎
app.set('view engine', 'ejs')

//express内置中间件函数（读取静态文件）
app.use(express.static('public'));

/*
//中间件的使用
app.use((req, res, next) => {
    console.log('new request made:')
    console.log(`hostname:${req.hostname}`)
    console.log(`path:${req.path}`)
    console.log(`method:${req.method}`)
    console.log('***************************')
    next()
})
*/

//morgan的使用（日志记录）
app.use(morgan('tiny'))

//主页面
app.get('/', function (req, res) {
    //重定向
    res.redirect('/blogs')
})

//blog页面
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        }).catch((err) => {
            console.log(err)
        })
})

//about页面
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

//创建blog页面
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' })
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/')
})