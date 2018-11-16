const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, '../src'),
  entry: './app.js',    
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../public')
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
    title: 'element builder',
    filename: 'index.html',
    //favicon: 'images/favicon.ico',
    chunksSortMode: 'none'
  })],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
    

 };