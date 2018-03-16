var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.js?/,
        exclude: /node_modules/,
        include : SRC_DIR,
        loader : 'babel-loader',
        options: {
          presets: ['react'],
          plugins: ["transform-class-properties"],
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};