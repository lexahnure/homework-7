const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const args = process.argv;
const isFileCSS = args.includes('--styles');
const webpack = require('webpack');
const date = Date.now();

const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    title: 'element builder',
    filename: 'index.html',
    chunksSortMode: 'none'
  }),
  new webpack.HotModuleReplacementPlugin(),
];

if (isFileCSS) {
  plugins.push(new MiniCssExtractPlugin({ filename: `styles-[hash]-${date}.css` }));
}

module.exports = {
  entry: './app.js',
  context: path.resolve(__dirname, '../src'),
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'vendors.js'
  },
  
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          isFileCSS ? MiniCssExtractPlugin.loader : 'style-loader',
          "css-loader",
          "sass-loader"
        ]
      },
       
    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    port: 9000,
    hot: true
  }

 };