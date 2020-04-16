const commonPaths = require('./common-paths');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // entry: {
  //   vendor: ['semantic-ui-react']
  // },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx", ".css", ".scss"],
  },
  output: {
    path: '/privacy-rating' + commonPaths.outputPath,
    publicPath: '/privacy-rating'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
      _redirects: `public/_redirects`
    })
  ]
};

module.exports = config;
