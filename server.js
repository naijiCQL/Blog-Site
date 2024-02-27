/*
 * @Author: 陈巧龙
 * @Date: 2024-02-26 17:01:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-27 10:34:54
 * @FilePath: \Node_Study\server.js
 * @Description: Web模块学习
 */
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // //设置响应标头类型
    // res.setHeader('Content-Type', 'text/plain')
    // // 响应文件内容
    // res.write('Hello World!')
    // // 发送响应数据
    // res.end()
    let path = './views/'

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200
            break;
        case '/about-us':
            //进行重定向
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
            path += '404.html';
            res.statusCode = 404
            break;
    }

    //设置响应标头类型
    res.setHeader('Content-Type', 'text/html')
    //读取html文件
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.statusCode = 404
        } else {
            res.write(data)
        }
        res.end()
    })

})

server.listen(8080, 'localhost', () => {
    console.log('Server running at http://localhost:8080/')
})
