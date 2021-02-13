const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = "development"
let target = "web"

if(process.env.NODE_ENV === 'production') {
  mode = "production"
  target = "browserslist"
}

module.exports = {
  mode: mode,
  //target: temperary hot reload fix when using .browserslistrc
  target: target,

  output: {
    assetModuleFilename: "images/[name][ext][query]"
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {publicPath: "" }
          }, 
          "css-loader", 
          "postcss-loader", 
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  // allow implicite extensions
  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "source-map",
  devServer: {
    contentBase:"./dist",
    hot: true
  }
}