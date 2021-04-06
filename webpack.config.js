const path = require("path"); // añadimos la ruta del js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssEtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Le decimos cual es nuetro punto de entrada
  output: {
    path: path.resolve(__dirname, "dist"), //ruta del archivo preparado
    filename: "main.js", // nombre del archivo resultante
  },
  resolve: {
    extensions: [".js"], // establecemos las extenciones con las que vamos atrabajar en nuestro proyecto.
  },
  module: {
    rules: [
      // establecemos reglas
      {
        test: /\.m?js$/,
        exclude: /node_modules/, // le pasamos que use nada de modules
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|\.styl$/i,
        use: [MiniCssEtractPlugin.loader, "css-loader", "stylus-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html", // pasamor el archivo de ntrada
      filename: "./index.html", // pasamos el archivo de salida
    }),
    new MiniCssEtractPlugin(),
  ],
};
