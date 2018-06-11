
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bsvue.js',
    library: 'bstar-components',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  externals: ['moment', 'lodash', 'font-awesome', 'font-awesome/css/font-awesome.min.css', 'vue'],
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
        use: 'url-loader?limit=1024&name=images/[hash:8].[name].[ext]'
      }
    ]
  }
}
