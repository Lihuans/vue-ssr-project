//服务端渲染逻
const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['content-type'] = 'text/html'

  const content = { url: ctx.path }
  // console.log(ctx.session.user);

  if(!ctx.session.user) {
    if(ctx.path !== '/login') {
      return ctx.redirect('/login')
    }
  } else {
    content.ad_session = ctx.session.user.ad_session
  }

  try {
    const appString = await renderer.renderToString(content);
    // console.log('currentRoute===============',content.router.currentRoute);


    if (content.router.currentRoute.fullPath !== ctx.path) {
      return ctx.redirect(content.router.currentRoute.fullPath)
    }

    const { title } = content.meta.inject()

    const html = ejs.render(template, {
      appString,
      style: content.renderStyles(),
      scripts: content.renderScripts(),
      title: title.text(),
      initalState: content.renderState(),
      resourceHints: content.renderResourceHints()
    })

    ctx.body = html
  } catch(err) {
    console.log('render error', err);
    throw err
  }

};
