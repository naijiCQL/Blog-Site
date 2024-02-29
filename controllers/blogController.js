/*
 * @Author: 陈巧龙
 * @Date: 2024-02-29 13:54:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-29 14:12:53
 * @FilePath: \Node_Study\controllers\blogController.js
 * @Description: 控制器（Controller）：用于处理请求，并跳回到下一个视图
 */
const Blog = require('../models/blog')

/**
 * @description: 进行博客检索
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
function blog_find(req, res) {
    Blog.find()
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        }).catch((err) => {
            console.log(err)
        })
}

/**
 * @description: 完成blog的post的请求
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
function blog_post(req, res) {
    console.log(req.body)
    const blog = new Blog(req.body)

    //将表单输入的数据进行保存
    blog.save()
        .then(() => { res.redirect('/blogs') })
        .catch((err) => {
            console.log(err)
        })
}

/**
 * @description: 完成blog的get请求
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*}
 */
function blog_get(req, res, next) {
    const id = req.params.id

    Blog.findById(id)
        .then((result) => {
            console.log(result)
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch((err) => {
            console.log(err)
            next()
        })
}

/**
 * @description: 完成blog的delete请求
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
function blog_delete(req, res) {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}


module.exports = { blog_find, blog_post, blog_get, blog_delete }