const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const BASE_JS = "./src/public/js/";

module.exports = {
  devtool: "source-map",
  entry: {
    app: BASE_JS + "app.js",
    chat: BASE_JS + "chat.js",
    getChat: BASE_JS + "getChat.js",
    text: BASE_JS + "text.js",
    getText: BASE_JS + "getText.js",
    getTextLeft: BASE_JS + "getTextLeft.js",
  },
  //mode: "development", //only on dev mode
  //watch: true, //only on dev mode
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        loader: "file-loader",
        options: {
          name: "imgs/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
};
