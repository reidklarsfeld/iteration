const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
    ]
  },
  watch: true,
  devServer: {
    publicPath: '/build',
    proxy: {
      '/homepage': 'http://localhost:3000',
      '/data': 'http://localhost:3000',
      '/signup': 'http://localhost:3000',
      '/login': 'http://localhost:3000',
      '/comments': 'http://localhost:3000',
      '/gettingUser': 'http://localhost:3000',
      '/logout': 'http://localhost:3000',
      '/favorites': 'http://localhost:3000',
      '/getfavorites': 'http://localhost:3000',
    }
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['*', '.js', '.jsx']
  }
};
