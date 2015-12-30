module.exports = {
  output: {
    filename: './static/webpack/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: "style!css!less!"
      }
    ]
  }
}
