module.exports = {
  context: __dirname + '/client',
  entry: './entry',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.jsx$/,
      loader: 'babel'
    }]
  }
};
