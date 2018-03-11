var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './assets/js/index'
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    path: path.resolve('./assets/bundles/'),
    // filename: "[name]-[hash].js",
    // sourceMapFilename: '[name]-[hash].map'
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map',
    publicPath: 'http://localhost:3000/assets/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  devtool: '#source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react']
        }
      }
    ]
  },
  
  context: __dirname,

  plugins: [
   new webpack.HotModuleReplacementPlugin(),
//    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'})
  ],

  // watch: true, // boolean
  // mode: "development",
  // watchOptions: {
  //   aggregateTimeout: 500, //Add a delay before rebuilding once the first file changed. This allows webpack to aggregate any other changes made during this time period into one rebuild. Pass a value in milliseconds
  //   ignored: /node_modules/
  // }

  mode: 'development'
}
