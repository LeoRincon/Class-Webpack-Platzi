const path = require("path");

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
    ],
  },
};
