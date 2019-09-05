const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), 
        new HtmlWebpackPlugin({filename: 'index.html', template: 'src/index.html'}),
        new CleanWebpackPlugin()
    ],


    
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            },

            
            {
             test: /\.css$/i,
             use: ['style-loader', 'css-loader'],
            }
        ]
    }
});