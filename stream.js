/*
 * @Author: 陈巧龙
 * @Date: 2024-02-26 16:31:59
 * @LastEditors: 
 * @LastEditTime: 2024-02-26 16:32:10
 * @FilePath: \Node_Study\stream.js
 * @Description: 文件流（stream）的使用
 */
const fs = require("fs");

// 创建可读流
const readerStream = fs.createReadStream('./docs/cql.txt', 'utf-8');
const writeStream = fs.createWriteStream('./docs/cql6.txt')

// 处理流事件 
// readerStream.on('data', (data) => {
//     writeStream.write('NEW DATA\n')
//     writeStream.write(data)
//     console.log(data)
// });

readerStream.pipe(writeStream)