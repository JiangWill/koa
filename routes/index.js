const router = require('koa-router')()
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = 'jwt'

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
router.get('/login', async (ctx, next) => {
  let checkUser = ctx.request.query.username == 'www' && ctx.request.query.password == 123;
  let token = jsonwebtoken.sign({
    name: ctx.request.query.username
  }, jwtSecret, {
    expiresIn: '1h'
  })
  if (checkUser) {
    ctx.body = {
      code: 200,
      msg: '登录成功',
      token,
    }
  } else {
    // 登录失败, 用户名密码不正确
    ctx.body = {
      code: 400,
      msg: '用户名密码不匹配'
    }
  }
})

// router.get('/userInfo', ctx => {
//   let token = ctx.header.token
//   ctx.body = {
//     token: token,
//     user: ctx.state.user
//   }
//   //使用jwt-simple自行解析数据
//   let payload = jsonwebtoken.verify(token, jwtSecret)
// })

module.exports = router