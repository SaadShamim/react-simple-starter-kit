module.exports = {
	entry: "./src/app.jsx",
    output: {
        path: "./public",
        filename: "build.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }
      ]
    }
}

