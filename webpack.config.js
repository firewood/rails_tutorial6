const path = require("path");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: "source-map",
  entry: {
    application: path.resolve(__dirname, "app/javascript/packs/Application.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "public/packs"),
    publicPath: isProd ? "/packs/" : "//localhost:8080/packs/",
    filename: isProd ? "[name]-[contenthash].js" : "[name].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
      publicPath: '/packs/'
    },
    host: "localhost",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {loader: "ts-loader"}
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new WebpackAssetsManifest({
      publicPath: true,
      output: "manifest.json",
      writeToDisk: true,
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? "[name]-[contenthash].css" : "[name].css",
    }),
  ],
};
