/*
 * @Author: 陈巧龙
 * @Date: 2024-02-29 10:45:56
 * @LastEditors: 
 * @LastEditTime: 2024-02-29 14:11:16
 * @FilePath: \Node_Study\routes\blogRoutes.js
 * @Description: 提炼公共路由
 */
const express = require('express')
const { blog_find, blog_post, blog_get, blog_delete } = require('../controllers/blogController')

const router = express.Router()

//当前端请求的url为'/blogs'，则服务端得到请求，向数据库进行查询，然后将查询的数据响应传递给index页面并跳转至index页面
router.get('/', (req, res) => {
    blog_find(req, res)
})

//前端发送post请求，请求url为'/blogs'，服务端将数据保存至数据库，并且响应跳转至index页面
//注：创建资源（比如blog）的POST请求应该发送到一个表示资源集合的路径上，如果需要是'/blogs'，而不是'/blogs/create'
router.post('/', (req, res) => {
    blog_post(req, res)
})

//当前端请求的url为'/blogs/create'，则服务端进行响应跳转至create页面
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' })
})

//当前端请求的url为'/blogs/:id'，则服务端进行响应跳转至details页面
router.get('/:id', (req, res, next) => {
    blog_get(req, res, next)
})

//当前端请求的url为'/blogs/:id'和delete请求，则服务端进行响应发送json数据
router.delete('/:id', (req, res) => {
    blog_delete(req, res)
});

module.exports = router