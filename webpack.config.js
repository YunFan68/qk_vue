var path = require('path')
var webpack = require('webpack')
//如果用这个插件的话那么保存的时候 热更新没有了，原理呢就是因为dev-server.js插件检测不到css文件的变化
//因为你拆出去的文件是不是在html文件中用link引用的
//在开发的时候我们为什么要拆出去呢？
//在vue项目里面gulp又有什么用呢？
//js咱们用webpack 打包了
//css  咱们是不是用vue-loader 拆出去的，
//写在vue文件里面的css样式 gulp怎么能差出去呢？
//就算有 ，我在webpack里面配置了vue-loader  我为什么又要用gulp去提取的？？
//能开一个cmd窗口，我为什么有要再开一个gulp窗口你？？？
//这个插件可以把 css 打包成一个独立的css文件
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
   entry: './app/app.js',
   output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: 'public',
      filename: 'bundle.js'
   },
   module: {
      rules: [{
         test: /\.vue$/,
         loader: 'vue-loader',
         options: { 
            //这里是添加浏览器前缀的这么一个插件
            postcss: [require('postcss-cssnext')()]
         }
      },{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },  {
         test: /\.js$/,
         loader: 'babel-loader',
         exclude: /node_modules/
      }, {
         test: /\.(png|jpg|gif|svg|webp)$/,
         loader: 'file-loader',
         options: {
            name: '[name].[ext]?[hash]'
         }
      }]
   },
   resolve: {
      alias: {
         'vue$': 'vue/dist/vue.esm.js'
      }
   },
   devServer: {
      historyApiFallback: true,

   },
   performance: {
      hints: false
   },
   devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
   module.exports.devtool = '#source-map'
      // http://vue-loader.vuejs.org/en/workflow/production.html
   module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
         'process.env': {
            NODE_ENV: '"production"'
         }
      }),
      new webpack.optimize.UglifyJsPlugin({
         sourceMap: true,
         compress: {
            warnings: false
         }
      }),
      new webpack.LoaderOptionsPlugin({
         minimize: true
      })
   ])
}
