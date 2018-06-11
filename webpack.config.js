const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const renderer = require('./md.config.js')

module.exports = {
  entry: __dirname + '/docs/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bsvue.js'
  },
  devtool: '#source-map',
  devServer: {
		contentBase: './dist',
    historyApiFallback: true,
    port: 8899,
		inline: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://192.168.14.88',
        secure: false,
        changeOrigin: true
      }
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      }, {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          preprocess: function(markdownIt, source) {
            markdownIt.renderer.rules.table_open = function() {
              return '<table class="table table-striped table-bordered">'
            }
            return source
          }
        }
      }, {
        test: /\.js$/,
        enforce: 'pre',
        use: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html'
    })
  ]
}
