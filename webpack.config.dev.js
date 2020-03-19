'use strict'

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

const isDevelopMode = process.env.NODE_ENV === 'development';

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  devServer: {
    host: 'localhost',
    port: 9000,
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopMode ? '[id].css' : '[id].[hash].css'
    }),
    new CopyWebpackPlugin([{
      from: resolve('assets/images'),
      to: resolve('dist/assets/images'),
      toType: 'dir'
    }])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
}