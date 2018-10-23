import { creatApp } from "./create-app";

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = creatApp()

    console.log('contextcontext======',context);

    router.push(context.url)

    router.onReady(() => {

      const matchedComponents = router.getMatchedComponents();

      console.log('matchedComponents========',matchedComponents.length);
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if(matchedComponents.length < 1) {
        return reject({ code: 404 })
      }
      // else {
      //   context.meta = app.$meta()
      //   resolve(app)
      // }


      Promise.all(matchedComponents.map(Comment => {
        // console.log('======================',123);
        if(Comment.asyncData) {
          return Comment.asyncData({
            store,
            router,
            route: router.currentRoute,
            context
          })
        }
      })).then((res) => {
        // console.log('res============',res);
        // const initState = {
        //    data: res,
        //    state: store.state
        // }
        // context.state = initState
        context.state = store.state
        context.meta = app.$meta()
        context.router = router
        resolve(app)
      }).catch(reject)
    })
  })

}
