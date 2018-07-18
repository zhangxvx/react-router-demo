const path = require('path');

let commonSettings = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ["node_modules"]
  },
  target: 'web',
};

module.exports = commonSettings;