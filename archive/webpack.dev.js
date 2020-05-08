const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './index.js'
    // the entry point of our app
  ],
  devServer: {
    // enable HMR on the server
    hot: true,
    // match the output path
    contentBase: path.resolve(__dirname, 'dist'),
    // match the output `publicPath`
    publicPath: '/',
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader?modules', ] },
    ]
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'static/index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: '/', },
    ]),
  ],
};
