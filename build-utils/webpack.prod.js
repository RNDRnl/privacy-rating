const commonPaths = require('./common-paths');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: 'static/[name].[hash].js',
    publicPath: process.env.BASE_PATH
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx", ".css", ".scss"],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      { test: /\.scss$/, use: [ 
        { loader: "style-loader" },  // to inject the result into the DOM as a style block
        { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
        { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
        { loader: "sass-loader",
          options: {
            prependData: `$env: '${process.env.BASE_PATH}/';`,
            webpackImporter: false
          },
        },  // to convert SASS to CSS // options: { prependData: '$env: \'privacy-rating/\';'}
        // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
    ] }, 
    {
      test: /\.css$/i,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader"}
      ]
    },
      // {
      //   test: /\.(woff2?|ttf|otf|eot|svg)$/,
      //   exclude: /node_modules/,
      //   loader: 'file-loader',
      //   options: {
      //       name: '[path][name].[ext]',
      //       // publicPath: '/privacy-rating/',
      //       // outputPath: '/privacy-rating/',
      //   }
      // },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader"
            }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].css',
    }),
    new CopyWebpackPlugin([
      {from:'resources',to:'resources'} 
    ]),
    new InterpolateHtmlPlugin({
      'CUSTOM_PATH': process.env.BASE_PATH.substring(1)
    }),
    new webpack.DefinePlugin(
      { 
        'process.env.BASE_PATH': JSON.stringify(`${process.env.BASE_PATH}`),
        'process.env.DOMAIN_PATH': JSON.stringify(`${process.env.DOMAIN_PATH}`)
      }
    )
  ],
};

module.exports = config;
