const router = require('koa-router')()
const Person = require('../middelware/controller/person')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
//添加
router.post('/add', async (ctx, next) => {
  try{
    await Person.add(ctx.request.query)
  }catch(err){
    console.log('错误',err)
  }
  ctx.body = {
    code: 0,
    msg: '保存成功'
  }
})
//查询
router.get('/query', async (ctx, next) => {
  let query = ctx.request.query,result = '';
  result = await Person.query(query)
  ctx.body = {
    code: 0,
    msg: result
  }
})


module.exports = router