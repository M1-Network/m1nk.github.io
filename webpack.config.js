
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { DefinePlugin, ProvidePlugin } = require('webpack')
module.exports = { 
  entry: {
    home: './src/js/home.js',
    // about: './src/js/about.js'
  },

  mode: 'development',

  devServer: {
    static: './docs',
    hot: true,
    compress: true,
    port: 9000
  },

  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },

  // rules
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1, // 碰见import css 向前找一位 postcss 处理import css
            esModule: false
          }
        }, 'postcss-loader', 'less-loader']
        // 'postcss-loader'
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.art$/i,
        use: 'art-template-loader'
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "image/[name].[hash:3][ext]"
        }
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name].[hash:3][ext]"
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }

    ]
  },

  // Plugins
  plugins: [

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `./src/views/home.html`,
      title: 'M1 Network',
      chunks: ["home"],
      hash: true
    }),

    new CssMinimizerPlugin(),

    new DefinePlugin({
      BASE_URL: '"./"'
    }),

    new ProvidePlugin({
      Popper: ['popper.js', 'default']
    }),

    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: [
              '**/**.html'
            ]
          }
        }
      ]
    })
  ],

  externals: {
    jquery: 'jQuery',
    bootstrap: 'bootstrap'
  },

}