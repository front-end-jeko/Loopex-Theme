const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      vendor: "./src/libraries/vendor.js",
      main: "./src/js/index.js"
    },
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
      rules: [
        {
          test: /\.html$/,
          use: ["html-loader"]
        },


        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "./images"
            }
          }
        },


        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: './fonts'
            }
          }]
        },
      ],
    }, 
    
    
    plugins: [
      new HtmlWebpackPlugin({
          template: './src/terms.html',
          inject: true,
          chunks: ['main', 'vendor'],
          filename: 'terms.html'
      }),
      new HtmlWebpackPlugin({
          template: './src/account.html',
          inject: true,
          chunks: ['main', 'vendor'],
          filename: 'account.html'
      }),
      new HtmlWebpackPlugin({
          template: './src/sliderpage.html',
          inject: true,
          chunks: ['main', 'vendor'],
          filename: 'sliderpage.html'
      }),
      new HtmlWebpackPlugin({
          template: './src/Privacy.html',
          inject: true,
          chunks: ['main', 'vendor'],
          filename: 'Privacy.html'
      }),
      new HtmlWebpackPlugin({
          template: './src/ico.html',
          inject: true,
          chunks: ['main', 'vendor'],
          filename: 'ico.html'
      }),
      new HtmlWebpackPlugin({
          template: './src/founds.html',
          inject: true,
          chunks: ['main', 'vendor'],
          filename: 'founds.html'
      }),
      new HtmlWebpackPlugin({
          template: './src/aboutloopex.html',
          inject: true,
          chunks: ['main', 'vendor'],
          filename: 'aboutloopex.html'
      })
    ]
}