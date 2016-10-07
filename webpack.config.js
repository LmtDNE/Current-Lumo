var webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    path: __dirname + "/client",
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.css?/,
      exclude: '/node_modules/',
      loader: 'style!css'
    },
    {
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      query: {
          presets: ['es2015', 'react']
        },
    },
    {
      test: /\.scss?/,
      loaders: ['style', 'css', 'postcss', 'sass']
    }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    contentBase: './client',
  }

};



