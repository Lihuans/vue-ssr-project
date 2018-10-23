//服务端创建bundle-开发环境
const Router = require('koa-router');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const MemoryFs = require('memory-fs');
const webpack = require('webpack');
const VueServerRenderer = require('vue-server-renderer')

const serverRender = require('./server-render');
const serverConfig = require('../../build/webpack.server.conf');

const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFs();
serverCompiler.outputFileSystem = mfs; //serverCompiler的输出目录

let bundle; //bundle记录每次webpack打包生成的文件
serverCompiler.watch({},(err, stats) => {  //watch每次修改文件重新打包
  if(err) throw err; //打包错误
  stats = stats.toJson();
  //非打包错误
  stats.errors.forEach(err => console.log('errors======',err))
  stats.warnings.forEach(warn => console.log('warnings======',warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )

  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))

  console.log('new bundle generate')
});

const handleSSR = async (ctx) => {
  console.log(11);
  // console.log('ctx============',ctx,'================ctx');
  if(!bundle) {
    ctx.body = '等一会儿。。。'
    return
  }

  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8000/vue-ssr-client-manifest.json'
  );

  const clientManifest = clientManifestResp.data;

  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  )

  const renderer = VueServerRenderer.createBundleRenderer(bundle,{
    inject: false,
    clientManifest
  })

  await serverRender(ctx, renderer, template)
};

const router = new Router();
router.get('*',handleSSR);

module.exports = router;



