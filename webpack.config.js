const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.WEBPACK_MODE === "production";
const PORT = 3000;

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
    port: PORT
  },
  entry: path.resolve(__dirname, "src", "index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          isProd
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: true
                }
              },
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              prependData: '@import "src/variables.scss";'
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};
