import webpack from "webpack";

import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  devtool: false,
  entry: {
    main: ["@babel/polyfill", "./src/index.ts"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/build",
    chunkFilename: "[id].[chunkhash].js",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", "json", "scss", "css"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
              cacheDirectory: true,
              plugins: ["react-hot-loader/babel"],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          "img-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/assets", to: "assets" }],
    }),
    new webpack.DefinePlugin({
      "process.env": {
        devServer: true,
      },
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      exclude: ["bundle.js"],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
    }),
  ],
};
