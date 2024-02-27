/*
 * @Author: 陈巧龙
 * @Date: 2024-02-26 14:41:32
 * @LastEditors: 
 * @LastEditTime: 2024-02-26 17:08:15
 * @FilePath: \Node_Study\module_export.js
 * @Description: 模块结果导出实例
 */
const students = ['cql', 'tsj', 'ydg']
const ages = [23, 24, 23]
console.log(`student is using ${students}`)

module.exports = {
    students, ages
}
