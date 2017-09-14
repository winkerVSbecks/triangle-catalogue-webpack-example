const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const showSourceMap = false;

module.exports = {
  bail: true,
  devtool: showSourceMap ? 'source-map' : false,
  // In production, we only want to load the polyfills and the app code.
  // What happens when you pass an array to entry? Passing an array of file paths to the entry
  // property creates what is known as a "multi-main entry". This is useful when you would like to
  // inject multiple dependent files together and graph their dependencies into one "chunk".
  entry: ['./src/polyfills', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    // These are the reasonable defaults supported by the Node ecosystem.
    extensions: ['.js', '.json', '.jsx'],
  },
  // performance: {
  //   hints: 'warning', // enum
  //   maxAssetSize: 200000, // int (in bytes),
  //   maxEntrypointSize: 400000, // int (in bytes)
  //   assetFilter: function(assetFilename) {
  //     // Function predicate that provides asset filenames
  //     return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
  //   },
  // },
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 5000, // 10000,
          name: '[name].[hash:8].[ext]',
        },
      },
      // babel config in package.json
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          compact: true,
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: showSourceMap,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          ],
        }),
      },
      {
        loader: 'file-loader',
        exclude: [
          /\.js$/,
          /\.css$/,
          /\.html$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        options: {
          name: '[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
    // It is absolutely essential that NODE_ENV was set to production here.
    // Otherwise React will be compiled in the very slow development mode.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    // Minify the code.
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     // Disabled because of an issue with Uglify breaking seemingly valid code:
    //     // https://github.com/facebookincubator/create-react-app/issues/2376
    //     // Pending further investigation:
    //     // https://github.com/mishoo/UglifyJS2/issues/2011
    //     comparisons: false,
    //   },
    //   output: {
    //     comments: false,
    //     // Turned on because emoji and regex is not minified properly using default
    //     // https://github.com/facebookincubator/create-react-app/issues/2488
    //     ascii_only: true,
    //   },
    //   sourceMap: showSourceMap,
    // }),
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
    }),
  ],
};
