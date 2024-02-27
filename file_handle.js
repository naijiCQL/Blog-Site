/*
 * @Author: 陈巧龙
 * @Date: 2024-02-26 13:59:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-26 16:31:24
 * @FilePath: \Node_Study\test.js
 * @Description: 文件的增、删、改
 */
const fs = require('fs');
const path = require('path');

// 递归删除存在文件的文件夹
// 文件路径
//const folderPath = './assets';

// if (fs.existsSync(folderPath)) {
//     fs.readdirSync(folderPath).forEach((file, index) => {
//         const curPath = path.join(folderPath, file);
//         if (fs.lstatSync(curPath).isDirectory()) { // 如果是文件夹，递归调用自身
//             deleteFolderRecursive(curPath);
//         } else { // 如果是文件，直接删除
//             fs.unlinkSync(curPath);
//         }
//     });
//     fs.rmdirSync(folderPath); // 删除空文件夹
//     console.log(`文件夹 ${folderPath} 已成功删除`);
// } else {
//     console.log(`文件夹 ${folderPath} 不存在`);
// }

// 使用 fs.readFile() 方法异步地读取文件内容
// fs.readFile('./docs/cql.txt', (err, data) => {
//     if (err) {
//         console.log('读取文件时出错:', err);
//     }
//     console.log('文件内容:', data.toString());
// });

//编辑文件
// fs.writeFile(filePath, 'file has written', () => {
//     console.log('file is writing...')
// })

//创建文件夹
//文件路径
// const createFile = './assets'
// //使用fs的existsSync判断文件夹是否存在
// if (!fs.existsSync(createFile)) {
//     //使用fs的mkdir的方法创建文件夹
//     fs.mkdir(createFile, (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('file has created')
//     })
// } else {
//     console.log('file has exist')
// }

//删除文件夹
//文件路径
// const filePath = './assets/cql.txt';
// if (fs.existsSync(filePath)) {
//     fs.rmdir(filePath, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('file deleted')
//         }
//     })
// } else {
//     console.log('file does not exist')
// }


