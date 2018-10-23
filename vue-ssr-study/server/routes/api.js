const Router = require('koa-router')

const apiRouter = new Router( { prefix: '/api' } )

const validateUser = async (ctx, next) => {
  if (!ctx.session.user) {
    ctx.status = 401
    ctx.body = 'need login'
  } else {
    await next()
  }
}

apiRouter.use(validateUser)

const createError = (resp) => {
  // console.log('resp==========',resp,'============resp');
  const err = new Error(resp.message)
  err.code = resp.status
  return err
}

const successResponse = (resp) => {
  // // console.log('%================%',resp);
  // console.log('%================%',resp.data);
  // if(resp.status === 200) {
    return resp
  // }
  // else {
  //   return createError(resp)
  // }
}

apiRouter
  .get('/todos', async (ctx) => {
    console.log(ctx.db);
    const todos = await ctx.db.getAllTodos()
    ctx.body = successResponse(todos)
  })
  .get('/resumes', async (ctx) => {
    // console.log('*****************=',ctx.query);
    // console.log('cookies=====================',ctx.cookies);
    const todos = await ctx.db.getResumes(ctx.query)
    ctx.body = successResponse(todos)
  })
  .get('/cities', async (ctx) => {
    // console.log('*****************=',ctx.query);
    // console.log('cookies=====================',ctx.cookies);
    const resp = await ctx.db.getCitys()
    ctx.body = successResponse(resp)
  })
  .post('/adPos', async (ctx) => {
    const resp = await ctx.db.getAdPos(ctx.request.body)
    console.log('resp===============',resp);
    ctx.body = successResponse(resp)
  })

module.exports = apiRouter
