const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const autoPrefixer = require('autoprefixer');
const { dependencies } = require('./package.json');

const context = resolve(__dirname, 'src');

module.exports = {
  entry: {
    table: './table',
    store: './table/store'
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
  },

  externals: Object.keys(dependencies),

  context,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context,
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, },
          }
        ]
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },

          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins() {
                return [
                  autoPrefixer
                ]
              }
            }
          },

          {
            loader: 'sass-loader',
            options: { sourceMap: true, },
          }
        ]
      },

    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
};
