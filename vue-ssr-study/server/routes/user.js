const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

const createError = (resp) => {
  // console.log('resp==========',resp,'============resp');
  const err = new Error(resp.message)
  err.code = resp.status
  return err
}

userRouter.post('/gaLogin', async (ctx) => {
    const resp = await ctx.db.gaLogin(ctx.request.body)
    if(resp.code === 100) {
      ctx.session.user = {
        ad_session: resp.msg.ad_session
      }
      ctx.body = resp
    } else {
      ctx.status = 401
      ctx.body = {
        code: 401,
        message: 'username or password error'
      }
    }
  })

module.exports = userRouter
