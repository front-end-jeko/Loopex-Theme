const path = require("path");


module.exports = {
    entry: {
      vendor: "./src/vendor.js",
      main: "./src/index.js"
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
              outputPath: "assets/images"
            }
          }
        }
      ],
    },   
}