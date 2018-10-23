//启动文件
const koa = require('koa');
const send = require('koa-send');
const koaBody = require('koa-body')
const koaSession = require('koa-session')

const staticRouter = require('./routes/static')
const apiRouter = require('./routes/api')
const userRouter = require('./routes/user')
const createDb = require('./db/db')
const config = require('../app.config')

const app = new koa();

const db = createDb(config.db.appId, config.db.appKey)

app.use(async (ctx, next) => {
  ctx.db = db
  await next()
})

const isDev = process.env.NODE_ENV === 'development';

app.keys = ['vue ssr teach']
app.use(koaSession({
  key: 'v-ssr-id',
  maxAge: 2*60*60*1000
}, app))

app.use(koaBody())
app.use(staticRouter.routes()).use(staticRouter.allowedMethods()); //koa-router的方法
app.use(userRouter.routes()).use(userRouter.allowedMethods()); //koa-router的方法
app.use(apiRouter.routes()).use(apiRouter.allowedMethods()); //koa-router的方法

let pageRouter;
if(isDev) {
  pageRouter = require('./routes/dev-ssr');
} else {
  pageRouter = require('./routes/prod-ssr');
}

app.use(pageRouter.routes()).use(pageRouter.allowedMethods()); //koa-router的方法

app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch(err) {
    // console.log('=======================',err);
    ctx.status = 500;
    // ctx = err
    if(isDev) {
      // ctx.body = err.message
      ctx.body = err.message
    } else {
      ctx.body = 'please try again later'
    }
  }
});


// app.use(async (ctx, next) => {
//   if(ctx.path === '/favicon.ico') {
//     await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../')})
//   } else {
//     await next()
//   }
// });


const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3333;

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
