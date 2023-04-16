const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/main.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_module/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: ">0.25%,not dead" }]],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.png|\.jpg/,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/index.pug",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/about.pug",
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/members/asato.pug",
      filename: "members/asato.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
