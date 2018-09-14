
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/*
* General config
*/
const config = {
  entry: {
    'js/app.js': './app/app.js',
    'css/main.css': './app/scss/main.scss'
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name]'
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'stage-0', 'es2015'],
            plugins: ['transform-class-properties']
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 50000,

          // url-loader sets mimetype if it's passed.
          // Without this it derives it from the file extension
          // mimetype: "application/font-woff",

          // Output below fonts directory
          name: './public/fonts/[name].[ext]'
        }
        // loader: 'url-loader?limit=100000'
      }
    ]
  }
}

/*
* Bundling for production
*/
if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'true'
  config.plugins = [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
    new ExtractTextPlugin({
      filename: 'css/main.css',
      disable: false,
      allChunks: true
    })
  ]
} else {
  config.devtool = 'false'
  config.plugins = [
    new ExtractTextPlugin({
      filename: 'css/main.css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } })
  ]
}

module.exports = config
