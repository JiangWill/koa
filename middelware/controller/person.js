const mongoose = require('mongoose')
//初始化Schema
let personSchma = new mongoose.Schema({
   name: String,
   age: Number
})
//生成数据库映射 Class
let Person = mongoose.model('Person', personSchma)

function query(params) {
   return new Promise((resolve,reject)=>{
      Person.find(params, (err, res) => {
         if (err) reject();
         resolve(res)
      })
   })
}
function add(params) {
   return new Promise((resolve,reject)=>{
      let obj = new Person({
         name:params.name,
         age:params.age
      })
      obj.save()
      resolve()
   })
}
module.exports = {
   query,
   add
}