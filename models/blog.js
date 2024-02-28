//存储数据步骤：定义Schema (骨架) > 创建model（模型）> Entity实例化方法。
//声明mongoose
const mongoose = require('mongoose');

//定义Schema (骨架)
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,//设置数据类型
        required: true,//设置为必需字段
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
}, { timestamps: true })

//创建model（模型）
const Blog = mongoose.model('Blog', blogSchema);

//导出model模型
module.exports = Blog